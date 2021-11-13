- v0.00.02
	- ItemTypes work on backend and frontend (manually)
	- added: PageShowcaseCounterUsingReducer() {
	- added: useToggle showcase 
	- devnotes: added notes on versioning
	- qstr.escapeHtml()
	- added: Showcase: React-Icons
====================================================================================
- .. generate mock data
	- .. fix names and other data




- .. make new branch: rename SxhowcaseManageItemTypes to ManageShowcaseReports
	- use the same actions

- .. make clear and save buttons work with editing
	- on clear: be able to set all initial values back


- .. make edit work
	- .. save button and mask icon buttons


- .. make components (ShowReports) also edit, delete, etc
	- .. in component: enable user to edit and delete with nice UX
		- save changes to JSON file
 
- generalize dpod.scss
	- dpod_unit

- refactor
	- itemsType --> itemTypes
	
- dpod published and to Heroku


- fix all naming conventions: itemObject --> itemTypeObject
- put back into item
	- infuseWithItemObject
- fix
	- itemstype
- simplify
		const initialShowcaseReports = await ShowcaseReports.instantiateFromItemObjects<ShowcaseReports, ShowcaseReport, IShowcaseReport>(ShowcaseReports, ShowcaseReport, data.showcaseReportObjects);

- put a fade-in on every page to avoid quick-blink loading phenomenon

- and enable grid view

- make ComponentDisplay components generic

- vim

- .. display all singular/plural display components
	- .. *** find solution for component per file:
		- ComponentDisplayShowcaseReport
		- ComponentDisplayAndEditShowcaseReport
		- ComponentListShowcaseReport

		- ComponentDisplayShowcaseReports
		- ComponentDisplayAndEditShowcaseReports
		- ComponentListShowcaseReports

- all pages to /pages
- .. enable save to itemtype in DisplayAndEdit

- todo
	- outline
		- 3x highlight: yellow, red, green
		- useful and rather emoticons
		- enable code and images in e.g. curriculum live-codings
		- videos 

- make plural itemTypes iterable

===================================================================================================

- .. see if DisplayItem works as component
- .. itemTypes
    - .. use itemtype classes on frontend
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

- tasks
	- replace all any with e.g. e: React.ChangeEvent<HTMLInputElement>
	- make Text Parser out of Curriculum Flashcard Parser
	- create page "Generate New Datapod Version"
	- autofocus on textarea (text parser)

- various todos
	- convert all requires in imports 
	- tasks
    - dpod setup site process
    - dpod site build process
        - randomize port
    - fix all browser index errors
	- fix page naming, allow colon for e.g. Showcase
	- add 404 page

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
            - guidelines 
                - an itemType has only one internal data source: this.itemObject
                    - there is no this.itemRecord
                    - to get this.itemRecord, use this.getItemRecord which gets its data from this.itemObject
                    - this.itemObject satisfies the interface e.g. IShowcaseReport
            - nomenclature
                - PageItems
                    - pageItem is of type PageItem (class)
                    - pageItems is of type PageItems (class)
                        - (has an internal array of pageItems)
                    - pageItemObject if of type IPageItem (interface)  
                    - pageItemObjects is of type IPageItem[] (interface) 
                - ShowcaseReports
                    - showcaseReport is of type ShowcaseReport (singular class object)
                    - showcaseReports is of type ShowcaseReports (plural class object)
                        - (it has an internal array of singular showcaseReport class objects)
                    - showcaseReportObject if of type IShowcaseReport (interface)  
						- (this is sent e.g. from backend to front end via JSON)
                    - showcaseReportObjects is of type IShowcaseReport[] (interface) 
				- infuse prefix
					- to fill the itemType with data, e.g. infuseWithObjectArray

- Datapod itemType creation syntax
	----------------------------------------
	** Magazines
	Title
	Description;p
	Number Of Pages;wn
	First Date Of Publication;dt

	** Employees
	First Name;germanFirstName|englishFirstName
	Last Name;lastName
	City;city
	----------------------------------------
- Datapod data format
	----------------------------------------
	==magazine
	New Yorker
	This is askdfj slfkjsldfjsaldfjsdf.
	45
	2021-10-08 12:52:34
	----------------------------------------
- Datapod Script (Domain-Specific-Language)
	----------------------------------------
	ITEM(magazine) {
		{title.toUpperCase().chopLeft('REPORT:')}
		{description}
	}
	----------------------------------------










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

- versioning numbers
	- semver (semantic versioning)
		- https://semver.org
		- syntax
			- MAJOR version when you make incompatible API changes,
			- MINOR version when you add functionality in a backwards compatible manner, and
			- PATCH version when you make backwards compatible bug fixes.
		- examples
			- 0.00.00
			- 0.01.00
	- odd/even to indicate unstable/stable
		- https://stackoverflow.com/questions/1266411/which-open-source-projects-use-odd-unstable-even-stable-style-of-versioning
			- The linux kernel dropped that practice with the start of the 2.6 kernel in 2003 (i.e. 2.4 was the last stable with a corresponding 2.5 development branch). 
			- Many open source projects did use this, but most have changed to other methods.
			- Ruby does not use this scheme anymore since 1.9 (which is stable)
			- IMHO, all releases should be relatively stable.
	- various
		- when doing a simple lexicographic string compare, "1.10" sorts before "1.8",  
	- Jeff Atwood: https://blog.codinghorror.com/whats-in-a-version-number-anyway/
		- use build numbers (.NET)
			- 0.00.00.000
		- include date in version
			- 2021-09-24 0.00.00
	- Datapod Versioning:
		- names:
			- 2021-09-24 - 0.00.00 - Create/delete pages have basic functionality
			- 2021-12-24 - 1.21.00 - Added three new DataTypes: Natural Numbers, Whole Numbers, Decimals
			- 2021-12-24 - 1.21.01 - Fixed spelling erros on setup
		- files:
			- 2021-09-24-0000000-firstPublicVersion.zip	
			- 2021-12-24-0012100-threeDataTypes.zip
			- 2021-12-24-0012101-fixedSpelling.zip
		- notes
			- I don't have build numbers so won't include these in the version
		- limitations
			- only 100 minor and minor versions possible before you are forced to move to a new version
				- 2.99.04
				- rationale: forces you to create new major and minor versions
			- FIXED: only 9 major versions possible before sorting issue breaks, e.g.
				- 9.23.02
				- 10.00.00 no longer sorts
				- rationale: before this point, you:
					- will have moved to a different project
					- can give the project a new name and restart the versioning, e.g. Road Runner 1.00.00
					- can just continue on with 10.00.00 and 
				- FIX: title is 3.11.02 but file idCode is 0031102
					- this allows e.g. 10.02.00 which is then sorts and aligns:
						- 0031102
						- 0100200
		- advantages
			- date-vers-note.zip 
				- sortable
				- reverse processable (can get date and version back out)
				- has virtually no time limit: will work till version 999.99.99

			- major/minor/patch format is quite standard


- add tips:
	- https://www.npmjs.com/package/remove-accents