const locations = [
	{
	"borough":"Bronx",
	"councildist":"8",
	"food_scrap_drop_off_site":"Brook Park",
	"hours_from":"6pm",
	"hours_to":"10am",
	"latitude":"40.809600830078125",
	"location":"494 East 141 St.",
	"longitude":"-73.918701171875",
	"ntaname":"Mott Haven-Port Morris",
	"operation_day":"Saturday",
	"open_months":"Year Round",
	"serviced_by":"Brook Park",
	"borocd":"201","ct2010":"4000",
	"zip_code":"10454",
	}
]

module.exports = { locations }

// ValidationError: 
// Location validation failed: 
// point: Cast to [string] failed for value 
// "[{"type":"Point","coordinates":[-73.9187,40.809599]}]" at path "point", 

