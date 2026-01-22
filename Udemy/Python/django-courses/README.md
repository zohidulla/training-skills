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
