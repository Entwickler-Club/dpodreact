- .. itemTypes
    - .. build code in to put data back to .json file


    
    - .. build basic item.ts, items.ts, pageItems.ts, pageItem.ts
        - .. load plurals with loadCode, singles with id
        - .. make button on JSON-read/write page: [Show PageItems]
            - backend: const pageItems = new PageItems('all');
                - send as: pageItems->outputAsJson()
                - show on frontend
                - build buttons for various loadCodes
                    - all
                    - menu = main

- various todos
    - dpod setup site process
    - dpod site build process
        - randomize port
    - fix all browser index errors

- make datapod site with dev/publish distinction, and streamline installation with video and have versions at dpodreact.netlify.app
	









===========================
- future todos
	- put code for api news in environment, and add instructions how to get one
- future features
	- API Displayer
		- input API and it will be displayed on page

- implement itemtypes for pageItems and save from Showcase: Read/Write JSON 
- .. load data from json file into plural object 

    
- items
    - load()
    - DataSource: [json], sqlite, dpod, excel
- item
    - save()
- JSON read/write showcase
    - button "Test Items Save"
- DpodDataManager
    - save()
    - 



- dpod
    - documentation
        - loadCode
        - itemTypes
            - pageItems
                - pageItem is of type PageItem (class)
                - pageItems is of type PageItems (class)
                    - (has an internal array of pageItems)
                - pageItemObject if of type IPageItem (interface)  
                - pageItemObjects is of type IPageItem[] (interface) 
            - ShowcaseReports
                - showcaseReport is of type ShowcaseReport (class)
                - showcaseReports is of type ShowcaseReports (class)
                    - (has an internal array of showcaseReports)
                - showcaseReportObject if of type IShowcaseReport (interface)  
                - showcaseReportObjects is of type IShowcaseReport[] (interface) 
		- paths
			- absolutePath
			- relativePath
			- locationRelativePath: '../qtools/qstr.ts'
        - file names
            - extension
                - 'json'
            - fileName
                - test.json
			- baseFileName
				- test 
            - pathAndFileName
                - "src/data/test.json" 
            - anchoredPathAndFileName
                - "./src/data/test.json"
            - absolutePathAndFileName
                - "C:\apps\dpodreact\src\data\test.json"
                - linux: ...
            - directory
                - "src\data"
            - path
                - "src\data\"
		- conventions
			- names of files
				- only components are first-letter capitalized

- shortcuts Ubuntu
    - go back: CTRL-ALT-(-)
    - go forward: CTRL-SHIFT-(-) 



- todo
    - .. fix sqlite page


- https://copilot.github.com/
- fireship youtuber
- superbase
- https://www.youtube.com/watch?v=4duqI8WyfqEhttps://copilot.github.com/