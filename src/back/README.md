# Setup
1. Activate Python virtual environment: `source bin/activate`
2. Install PostgreSQL & psycopg2: `pip install psycopg2`
    - You may need to do this: https://stackoverflow.com/questions/39767810/cant-install-psycopg2-package-through-pip-install-is-this-because-of-sierra
3. Navigate to the "mysite" project
4. Setup PostgreSQL and update database configuration in [mysite/mysite/settings.py](./mysite/mysite/settings.py)
4. Apply all database migrations: `python manage.py migrate`
5. Start the web server: `python manage.py runserver`
6. Create a new super user: `python manage.py createsuperuser`

To deactivate the virtual environment: `deactivate`