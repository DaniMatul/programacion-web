from django.shortcuts import render

# Create your views here.
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
import redis
import uuid


r = redis.Redis(host="redis", port=6379, db=0, decode_responses=True)

@csrf_exempt
def hide_secret(request):
    if request.method == "POST":
        try:
            body = json.loads(request.body)
            secret_text = body.get("text")

            if not secret_text:
                return JsonResponse({"error": "Missing 'text' field"}, status=400)

            # Crear llave unica
            key = str(uuid.uuid4())[:8]
            while r.exists(key):
                key = str(uuid.uuid4())[:8]

            # Guardar en redis
            r.set(key, secret_text)
            return JsonResponse({"key": key})
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=500)

    return JsonResponse({"error": "Invalid method"}, status=405)


def reveal_secret(request, key):
    try:
        if not r.exists(key):
            return JsonResponse({"error": "Secret not found or already revealed"}, status=404)

        secret = r.get(key)
        r.delete(key)
        return JsonResponse({"secret": secret})
    except Exception as e:
        return JsonResponse({"error": str(e)}, status=500)
