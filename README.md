# Solution of the Logic Problem

## Overview 
The exercise consists of obtaining a table including the frequency in which two employees coincide in the hours worked.  For this purpose, 5 sets of data have been entered to test the correct functioning of the algorithm. The flow in which the program works is as follows:

- The user uploads the file containing the input information (only .txt format files are supported).
- The program reads the input data and by creating objects of the Day and Employee classes it obtains the frequency with which the employees coincide in their work schedules.
- The program returns a table detailing the name of the employees and the frequency with which they have coincided in their working hours. 

The exercise was carried out in the JavaScript programming language and the program runs in a browser so it is not necessary to generate any executable.

## Architecture 
For the development of this exercise, the Model View Controller (MVC) architecture style was used as follows:

- **Model**: The file models.js contains the classes that allow defining the data structure. In this case the classes are Employee and Day.
- **Controller**: The file index.js contains all the logic of the exercise, where the objects of the classes of the model are created and the process of comparison of the employees' schedules is performed to obtain the output mentioned above.
- **View**: The index.html file contains the graphical interface shown to the user, which consists of two sections. In the first section the user uploads the file with the input information and in the second section the user can visualize the result of the process.

 ## Methodology
The phases used for the resolution of the exercise are based on the stages that are followed during an iteration within the XP methodology and are as follows:
- Analysis: an analysis of the following points was performed:
  - The structure of the data.
  - The way to obtain the data from the input file. 
  - The way of comparing the work schedules of the employees.
  - Obtaining the value indicating how often the work schedules coincided.
- Design: A small diagram of the way in which the data are related was made.
- Coding: Coding was carried out following the considerations detailed in the analysis and carrying out small queries on the operation of the language's own methods, especially those related to arrays.
- Testing: Tests were carried out to identify possible errors and provide the respective solutions. 

## Run Steps
- Clone the repository 
- Open the **index.html** file in your favorite browser.
- Select the .txt file with the information to analyze. In the repository you will find the data.txt file for this purpose.
- In the Output section you will see the names of the employees along with the frequency with which they coincide in the office.
