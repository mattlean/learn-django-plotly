# Setup
1. Activate Python virtual environment: `source bin/activate`
2. Install PostgreSQL & psycopg2: `pip install psycopg2`
    - You may need to do this: https://stackoverflow.com/questions/39767810/cant-install-psycopg2-package-through-pip-install-is-this-because-of-sierra
3. Navigate to the "mysite" project
4. Setup PostgreSQL and update database configuration in [mysite/mysite/settings.py](./mysite/mysite/settings.py)
4. Check if database migrations are necessary: `python manage.py check`
5. Apply database migrations if necessary: `python manage.py migrate`
6. Start the web server: `python manage.py runserver`
7. Create a new super user: `python manage.py createsuperuser`

## Other Commands
- To deactivate the virtual environment: `deactivate`
- Run Python shell with `DJANGO_SETTINGS_MODULE` environment variable set: `python manage.py shell`