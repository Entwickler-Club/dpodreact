### implement itemtypes for pageItems and save from Showcase: Read/Write JSON 

- x all imports for item classes for extends
- .. load data from json file into plural object 

- .. build basic item.ts, items.ts, pageItems.ts, pageItem.ts
    - x build the four classes
    - .. load plurals with loadCoad, singles with id

    - .. make button on JSON-read/write page: [Show PageItems]
        - backend: const pageItems = new PageItems('all');
            - send as: pageItems->outputAsJson()
            - show on frontend
            - build buttons for various loadCodes
                - all
                - menu = main
    
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
        - file names
            - extension
                - 'json'
            - fileName
                - test.json 
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

- remember
    - go back: CTRL-ALT-(-)
    - go forward: CTRL-SHIFT-(-) 