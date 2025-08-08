# predict_price.py
import sys
import json
import pickle
import numpy as np

# Load model
with open('crop_price_model.pkl', 'rb') as f:
    model = pickle.load(f)

# Read input from stdin
input_data = json.load(sys.stdin)
current_month = input_data.get('current_month', 7)

# Predict next 6 months
future_months = np.array([[((current_month + i - 1) % 12) + 1] for i in range(1, 7)])
predictions = model.predict(future_months)

# Output result
result = {f"month_{i+1}": round(pred, 2) for i, pred in enumerate(predictions)}
print(json.dumps(result))
