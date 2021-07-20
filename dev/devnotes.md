### implement itemtypes for pageItems and save from Showcase: Read/Write JSON 

- .. build basic item.ts, items.ts, pageItems.ts, pageItem.ts
    - x build the four classes
    - .. load plurals with loadCord, singles with id

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