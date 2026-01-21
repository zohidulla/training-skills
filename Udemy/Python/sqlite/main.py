# Работа с базой данных SQLite - Working with an SQLite database
import sqlite3

DB_NAME = 'sqlite_db.db'

# Создание таблицы courses - Creating the courses table
# with sqlite3.connect(DB_NAME) as sqlite_conn:
#   # print(sqlite_conn)
#   # print(sqlite3.sqlite_version)
#     sql_request = """
#         CREATE TABLE IF NOT EXISTS courses (
#             id INTEGER PRIMARY KEY AUTOINCREMENT,
#             title TEXT NOT NULL,
#             students_qty INTEGER,
#             reviews_qty INTEGER
#         )
#     """
#     sqlite_conn.execute(sql_request)


# Вставка данных в таблицу courses - Inserting data into the courses table
# courses = [
#     (123, 'JavaScript', 800, 45),
#     (124, 'Java', 600, 30),
#     (125, 'C#', 750, 25),
#     ]
# with sqlite3.connect(DB_NAME) as sqlite_conn:
#     sql_request = "INSERT INTO courses VALUES (?, ?, ?, ?)"
#     for course in courses:
#         sqlite_conn.execute(sql_request, course)
#     sqlite_conn.commit()

# Чтение данных из таблицы courses - Reading data from the courses table
with sqlite3.connect(DB_NAME) as sqlite_conn:
    # sql_request = "SELECT * FROM courses"
    # sql_request = "SELECT * FROM courses WHERE students_qty > 700"
    sql_request = "SELECT * FROM courses WHERE title LIKE 'P%'"
    sql_cursor = sqlite_conn.execute(sql_request)
    courses = sql_cursor.fetchall()
    for course in courses:
        print(course)
        # (123, 'JavaScript', 800, 45)
        # (124, 'Java', 600, 30)
        # (125, 'C#', 750, 25)
        # (234, 'Python Basic', 1000, 50)