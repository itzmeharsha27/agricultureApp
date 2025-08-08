# backend/train_model.py
import pandas as pd
from sklearn.linear_model import LinearRegression
import pickle

# Example data: crop prices over months
data = {
    'month': list(range(1, 13)),  # Jan to Dec
    'price': [50, 52, 55, 58, 60, 62, 64, 65, 63, 61, 59, 58]  # Example price trend
}
df = pd.DataFrame(data)

X = df[['month']]
y = df['price']

model = LinearRegression()
model.fit(X, y)

# Save model
with open('crop_price_model.pkl', 'wb') as f:
    pickle.dump(model, f)

print("Model trained and saved.")
