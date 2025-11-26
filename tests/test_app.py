from app.app import app

def test_home():
    response = app.test_client().get("/")
    assert response.status_code == 200
    assert b"Microservicio Python funcionando" in response.data
