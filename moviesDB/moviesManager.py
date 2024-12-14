import sqlite3
def findMovie(query):
    db = sqlite3.connect('movies.db')
    cursor = db.cursor()
    cursor.execute('SELECT * FROM movies WHERE (title LIKE "%{0}%") OR (actors LIKE "%{0}%")'.format(query))
    for row in cursor:
        print('{0} {1}'.format(row[1], row[2]))
    db.close()

def addMovie(movieName, year, actors):
    db = sqlite3.connect('movies.db')
    cursor = db.cursor()
    cursor.execute('INSERT INTO movies (title, year, actors) VALUES ("{0}", "{1}", "{2}")'.format(movieName, year, actors))
    db.commit()
    for row in cursor:
        print('{0} {1}'.format(row[1], row[2]))
    db.close()

def deleteMovie(movieName, year, actors):
    db = sqlite3.connect('movies.db')
    cursor = db.cursor()
    cursor.execute('INSERT INTO movies (title, year, actors) VALUES ("{0}", "{1}", "{2}")'.format(movieName, year, actors))
    db.commit()
    for row in cursor:
        print('{0} {1}'.format(row[1], row[2]))
    db.close()

def selectAll():
    db = sqlite3.connect('movies.db')
    cursor = db.cursor()
    cursor.execute('SELECT * FROM movies')
    for row in cursor:
        print('{0} {1} {2}'.format(row[1], row[2], row[3]))
    db.close()

#findMovie('TEST')
addMovie('TEST2', 2005, "DEF")
selectAll()
