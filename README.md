grat
====

Groovy, Ratpack, AngularJS abd Bootstrap

An application based on the Lazybones and ngBoilerplate templates.

* The project is laid out as follows:
'''
  <proj>
    |
    +- client - The AngularJS application
    |   |
    |   +- Gruntfile.js // See here for details of the client setup
    |   +- etc.
    |
    +- server - The Ratpack application
        |
        |
        +- src
            |
            +- ratpack
            |   |
            |   +- ratpack.groovy
            |   +- config.groovy
            |   +- public          
            |        |
            |        +- // Static assets in here - generated from the client by running grunt
            |
            +- main
            |   |
            |   +- groovy
            |        |
            |        +- // App classes in here!
            |
            +- test
                |
                +- groovy
                     |
                     +- // Spock tests in here!
'''
You can start the app with:

    cd client
    grunt
    cd ..
    cd server
    ./gradlew run

