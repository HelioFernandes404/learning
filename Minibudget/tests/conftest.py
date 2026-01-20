import pytest
import sqlite3
import tempfile
import os
import sys

# --- PATH CONFIGURATION ---
# Ensure the project root is in sys.path for module imports
project_root = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
if project_root not in sys.path:
    sys.path.insert(0, project_root)

# Import the create_app function from app.py
from app import create_app
import db

# --- PYTEST FIXTURES ---

@pytest.fixture(scope='function')
def test_app():
    """
    Provides a Flask app instance configured for testing with a temporary SQLite DB.
    Ensures database schema is created for each test.
    """
    # Create a temporary file for the test database
    db_fd, db_path = tempfile.mkstemp()

    # Use create_app to get a fresh app instance
    # Pass a configuration object for testing
    class TestConfig:
        TESTING = True
        DATABASE = db_path
        SECRET_KEY = "testing_secret_key_for_tests"

    app_instance = create_app(config_object=TestConfig)

    # Access the application context to perform DB setup
    with app_instance.app_context():
        # Initialize the database schema using the test setup
        db.init_db()

        # Yield the app instance to the test, keeping the context and DB alive
        yield app_instance

        # --- TEARDOWN ---
        # Close the database connection after the test is done
        db.close_db()

    # Clean up the temporary database file
    os.close(db_fd)
    os.unlink(db_path)

# Fixture for the test client, depends on the test_app fixture
@pytest.fixture(scope='function')
def client(test_app):
    """Provides a test client for the Flask app."""
    # The test_app fixture ensures the app is configured and DB is ready
    return test_app.test_client()
