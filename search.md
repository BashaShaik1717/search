# Search in Istanbul

In Istanbul, we are introducing a large refactoring of how the default search widgets work in Istanbul. Here, you will find documentation on what has changed, and how you can leverage the new features to improve the Service Portal search experience.

## High Level Overview
Following is an overview of the new concepts you will need to know to work with search.

### Search Sources
A **search source** is a record that describes the behavior and source of some type of data that you would like to search over. The search group defines where search data is retrieved from, how a search entry is templated in the search result page, and whether or not typeahead functionality is enabled for that search type.

#### Choosing What Data to Search
The data for Search Sources can be generated one of two ways (completely configurable):
  1. **Simple:** Search Sources can be defined as a table within ServiceNow. When using this method of defining a search source, the administrator can define what field on the table to use as a primary field, what field to search over, and what additional fields to display. This method does not involve writing any code.
  2. **Advanced:** For more control over how a search is executed and what data is searched and returned, administrators can define a **data-fetching script** which executes on the server and builds up a result array to return to the search widget. This method is more complex, but offers complete power over how a search is executed. Here, you are not limited to records and tables within ServiceNow - you can define a script that fetches data from anywhere on the web.

#### Defining The Look of your Search Results
To configure how your data is rendered on the search results page, you can define a template for that data in the **search page template**. This is simple HTML where you can define Angular bindings to actually render the data on the screen. Each search source comes with a default template that can be used, or modified to display additional data that you can provide through a **data-fetch script**.

#### Typeahead
Typeahead is a mechanism for returning search results as a user is typing in a search box in real-time. This functionality is configurable from within a search source.

Since some types of search scripts may not be fast enough to make typeahead feasible, it can be enabled or disabled per search source. So, you can make some search sources use typeahead, and disable it on others.

Additionally, similar to generating data for search sources, there are two ways to configure typeahead

1. **Simple:** Administrators can simply define an icon for typeahead results, which will show next to the primary field defined by the search results. This is the easiest configuration to get immediate typeahead results with little configuration.
2. **Advanced:** If more fine-grain control is desired over the appearance of typeahead results, users can enable advanced configuration of typeahead and configure the template of the typeahead result directly, in much the same way that the template of the search result is configurable through the search page template.

### New Tables  
We have introduced two new tables to assist in defining how search works in SP.

 - `sp_search_source` - Contains the definition of a search source. Data-fetch scripts, templates, and other configurations are all defined here.
 - `m2m_sp_portal_search_source` - This is a many-to-many table that allows you to map search sources to portals. So, you can define some portals to use different search sources than other portals.

## Advanced Topics
Talk about creating custom urls

Talk about how to fetch data from an external source?

## Examples?
