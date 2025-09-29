from flask import Flask, request, jsonify
app = Flask(__name__)

# Simple mock AI endpoint — replace with real model/SDK later
@app.route('/generate', methods=['POST'])
def generate():
    data = request.get_json() or {}
    prompt = data.get('prompt', '')
    # mock response
    answer = f"(mock-ai) Received: {prompt}. This is a generated response."
    return jsonify({ 'answer': answer })

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
