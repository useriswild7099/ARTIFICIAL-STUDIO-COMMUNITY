
const testData = {
  name: "Hybrid Load Test",
  email: `test_${Date.now()}@artificial.studio`,
  phone: "1234567890",
  interests: ["AI", "Robotics"]
};

fetch('http://localhost:3000/api/join', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(testData)
})
.then(res => res.json())
.then(data => console.log('Result:', data))
.catch(err => console.error('Error:', err));
