# Django - The Web Framework for Perfectionists with Deadlines

Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design. Built by experienced developers, it takes care of much of the hassle of web development, so you can focus on writing your app without needing to reinvent the wheel. It’s free and open source.

## Key Features

- **Ridiculously fast.** Django was designed to help developers take applications from concept to completion as quickly as possible.
- **Reassuringly secure.** Django takes security seriously and helps developers avoid many common
  security mistakes, such as SQL injection, cross-site scripting, cross-site request forgery, and clickjacking.
- **Exceedingly scalable.** Some of the busiest sites on the web leverage Django’s ability to quickly and flexibly scale.
- **Incredibly versatile.** Companies, organizations, and governments have used Django to build all sorts of things — from content management systems to social networks to scientific computing platforms.

## Getting Started

To get started with Django, you can follow the official documentation at [https://docs.djangoproject.com/](https://docs.djangoproject.com/).
You can also install Django using pip:

```bash
pip install Django
```

## Documentation

Comprehensive documentation for Django is available at [https://docs.djangoproject.com/](https://docs.djangoproject.com/).

## Community

Django has a vibrant and active community. You can join the discussion on the [Django Forum](https://forum.djangoproject.com/), or find help on [Stack Overflow](https://stackoverflow.com/questions/tagged/django).
You can also follow Django on Twitter [@djangoproject](https://twitter.com/djangoproject) for the latest news and updates.

## Contributing

Django is an open-source project, and we welcome contributions from the community. If you would like to contribute, please read our [contributing guidelines](https://docs.djangoproject.com/en/stable/internals/contributing/).

## License

Django is released under the BSD license. For more information, please see the [LICENSE](https://docs.djangoproject.com/en/stable/topics/license/).

## Acknowledgements

Django was originally developed at the Lawrence Journal-World newspaper in Kansas. We would like to thank all the developers and contributors who have helped make Django what it is today.

## MVC Framework

Django follows the Model-View-Controller (MVC) architectural pattern, which helps in separating the data model, user interface, and control logic. In Django, the components are referred to as Model, Template (View), and View (Controller).

- **Model <=> (Model):** Represents the data structure and handles database interactions.
- **Template <=> (View):** Manages the presentation layer and defines how data is displayed to the user.
- **View <=> (Controller):** Contains the business logic and processes user requests, interacting with models and views to generate responses.

This separation of concerns makes Django applications easier to manage and scale.
For more details on Django's MVC implementation, refer to the [official documentation](https://docs.djangoproject.com/en/stable/intro/tutorial01/#the-mvc-pattern-and-django).

## Install Django

To install Django, you can use pip, the Python package manager. Open your terminal and run the following command:

```bash
pipenv install django
```

This will install the latest stable version of Django. You can verify the installation by running:

```bash
django-admin --version
```

This should display the version of Django that you have installed.
For more installation options and details, refer to the [official installation guide](https://docs.djangoproject.com/en/stable/topics/install/).

## Project Setup with Specific Django Version

```bash
pipenv install django==4.0.8
or
pipenv install django
```

## To activate this project's virtualenv, run pipenv shell.

```bash
pipenv shell
```

## Start Django Project

```bash
django-admin startproject base .
# django-admin - is a command-line utility that comes with Django.
# startproject - is the command to create a new Django project.
# base - is the project name
# . - indicates current directory
```

## Run Development Server

```bash
python manage.py runserver
```

This command starts the Django development server, which allows you to test your application locally. By default, the server runs on `http://127.0.0.1:8000/`. You can access this URL in your web browser to see your Django project in action.

## Locate Virtual Environment

```bash
pipenv --venv
```

This command will display the path to the virtual environment created by Pipenv for your project. You can use this path to activate the virtual environment manually if needed.
For more information on managing virtual environments with Pipenv, refer to the [Pipenv documentation](https://pipenv.pypa.io/en/latest/).

## manage.py

The `manage.py` file is a command-line utility that allows you to interact with your Django project in various ways. It provides commands for tasks such as running the development server, creating database migrations, and managing applications within your project.

## settings.py

The `settings.py` file is a crucial part of any Django project. It contains all the configuration settings for your Django application, including database configurations, installed apps, middleware, templates, static files, and more.

## wsgi.py

The `wsgi.py` file is used for deploying your Django application on a web server that supports the Web Server Gateway Interface (WSGI) standard. It serves as the entry point for WSGI-compatible web servers to serve your Django application.

## asgi.py

The `asgi.py` file is used for deploying your Django application on a web server that supports the Asynchronous Server Gateway Interface (ASGI) standard. It serves as the entry point for ASGI-compatible web servers to serve your Django application.

## urls.py

The `urls.py` file is responsible for mapping URL patterns to views in your Django application. It defines the routing of incoming HTTP requests to the appropriate view functions or class-based views that handle those requests.

## Create Django App

```bash
python manage.py startapp shop
```

## Difference between a project and applications

A Django project is a collection of settings and configurations that define a web application, while a Django application is a modular component that performs a specific function within the project. A project can contain multiple applications, each responsible for different features or functionalities.
For example, a project could be an e-commerce website, while applications within that project could include a shopping cart, user authentication, and product catalog.

## Apply Migrations

```bash
python manage.py migrate
```

This command applies database migrations to your Django project. Migrations are a way of propagating changes made to your models (such as adding or modifying fields) into your database schema. Running `migrate` ensures that your database is in sync with your current set of models and their definitions.

## Create Superuser

```bash
python manage.py createsuperuser
```

This command creates a superuser account for your Django project. A superuser has all permissions and can access the Django admin interface to manage the application's data and settings. You will be prompted to enter a username, email address, and password for the superuser account.

## Make Migrations

```bash
python manage.py makemigrations
```

This command creates new migration files based on the changes you have made to your models. Migrations are used to propagate changes to your database schema, and running `makemigrations` generates the necessary files that describe those changes. After creating migrations, you can apply them to the database using the `migrate` command.

## Apply Migrations

```bash
python manage.py migrate
```

This command applies database migrations to your Django project. Migrations are a way of propagating changes made to your models (such as adding or modifying fields) into your database schema. Running `migrate` ensures that your database is in sync with your current set of models and their definitions.

## Django Shell

This command opens an interactive Python shell with your Django project's settings and models loaded. It allows you to interact with your Django application directly from the command line, making it useful for testing, debugging, and experimenting with your models and database queries.

```bash
python manage.py shell

Python 3.14.0 (tags/v3.14.0:ebf955d, Oct  7 2025, 10:15:03) [MSC v.1944 64 bit (AMD64)] on win32
Type "help", "copyright", "credits" or "license" for more information.
(InteractiveConsole)
>>>
```

Example Usage:

```bash
>>> from shop.models import Category, Course
>>> Course.objects.all()
<QuerySet []>
>>> Category.objects.all()
<QuerySet []>
>>> new_category = Category(title='Programming')
>>> new_category.save()
>>> Category.objects.all()
<QuerySet [<Category: Category object (1)>]>
>>> new_category.id
1
>>> new_category.title
'Programming'
>>> new_category.created_at
datetime.datetime(2026, 1, 23, 4, 22, 19, 537730, tzinfo=datetime.timezone.utc)
>>>
```

```bash
>>> Category.objects.get(pk=1)
<Category: Category object (1)>
>>> Category.objects.get(pk=1).id
1
>>> Category.objects.get(pk=1).title
'Programming'
>>> Category.objects.get(pk=1).created_at
datetime.datetime(2026, 1, 23, 4, 22, 19, 537730, tzinfo=datetime.timezone.utc)
>>>
```

```bash
>>> Category.objects.filter(pk=1)
<QuerySet [<Category: Category object (1)>]>
>>> Category.objects.filter(title='Programming')
<QuerySet [<Category: Category object (1)>]>
>>>
```

```bash
>>> category = Category.objects.get(id=1)
>>> category.course_set.all()
<QuerySet []>
>>> category.course_set.create(title="Complete Python Guide", price=99.99, students_qty=100, reviews_qty=50)
<Course: Course object (1)>
>>> Course.objects.all()
<QuerySet [<Course: Course object (1)>]>
>>> Course.objects.get(pk=1)
<Course: Course object (1)>
>>> category.course_set.create(title="Complete Java Guide", price=99.99, students_qty=80, reviews_qty=40)
<Course: Course object (2)>
>>> Course.objects.all()
<QuerySet [<Course: Course object (1)>, <Course: Course object (2)>]>
>>> [course.title for course in Course.objects.all()]
['Complete Python Guide', 'Complete Java Guide']
>>> quit()
now exiting InteractiveConsole...
```

Shell Commands

```bash
dir(obj)          # List object attributes/methods
help(Model)       # Get help on a model
vars(obj)         # View object's __dict__
type(obj)         # Check object type
quit() or exit()  # Exit the shell
```

## Install Django tastypie

```bash
pipenv install django-tastypie
```

Django Tastypie is a powerful and flexible library for building RESTful APIs in Django. It provides a simple and consistent way to expose your Django models as web services, allowing you to create, read, update, and delete resources over HTTP.

## Create Django App for API

```bash
python manage.py startapp api
```

This command creates a new Django application named "api" within your project. This application will be used to define and manage your API endpoints using Django Tastypie.
