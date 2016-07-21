# JSON-Timesheet-Generator

## Description
  Timesheet Generator application is used to generate a timesheet for employees working inside an organization. The timesheet displays hours worked by each user per day and can be used to track if that user is completing his hours or not. The data is supplied through a JSON file and further parsed through AJAX before being displayed.

## Technology Used
  Timesheet Generator is build using the following languages:
  -	HTML
  -	CSS
  -	JavaScript
  -	jQuery
  -	AJAX  
  -     JSON
  
Other tools involved:
  -	Brackets – Text Editor for the above languages
  -	Jasmine JavaScript Unit Testing Framework

## Unit Testing
  Timesheet Generator is thoroughly tested using unit testing using the Jasmine Framework for JavaScript. Each function was testing using 100 test cases with positive results throughout the integration process. The spec.js files contain the test cases that are matched with their appropriate functions in src.js files. The results being positive for each case.

## Interface

When you load **_index.html_**
![index.html](http://i.imgur.com/ym74OdB.png)

When you click on **_Generate Timesheet_**
![Generate Timesheet](http://i.imgur.com/dhO2qbp.png)

When **_Timesheet is Generated_**
![Timesheet Generated](http://i.imgur.com/2JG2Txi.png)

## JSON Data Summary
  Data being displayed is parsed through AJAX with the following structure:

**_JSON Object Format_**
```
{
    “Project” : project name,
    “Key” : project key,
    “Summary”: work done by the assignee,
    “Assignee”: employee name,
    “Updated”: date when he logged his work,
    “Time Spent”: how much time did he spend on this task
}
```

If you want to edit the data, then paste your data in *json/project.json* file and edit **_indexAjax.js_** and **_indexJSON.js_** appropriately

## How to Use
	
To run unit testing
-	Go to **./unittest/** folder
-	Open **SpecRunner.html** in a Text Editor
-	Edit the **script** tags for **src** and **spec** with the appropriate script files
-	Run the **SpecRunner.html** file in a Browser
-	Watch the results of Test cases

To run Timesheet Generator
-	Run the **index.html** file in a Browser
-	Click **+ Click Generate Button** to Generate a Timesheet
-	Edit **Start Date**, **End Date** and **Username** from the Dropdown menu
-	Click **Submit** After Entering Valid Details
-	Timesheet would be displayed as per input

## Credits
  This application was developed for **DGS Pvt Ltd** under the supervision of **Ansar Muhammad** by **Danyal Imran** and **Usman Mansoor**.
