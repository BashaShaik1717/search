(function() {
  //For the SQANDA Search Source, make sure we've created an m2m
  //relationship between the source and every portal on the instance.
  var searchSourceGR = new GlideRecord("sp_search_source");
  searchSourceGR.addQuery("id", "qa");
  searchSourceGR.query();

  if(searchSourceGR.next()) {
    //loop over all our portals, and if a relationship doesn't exist yet for
    //this portal and SQANDA, make one.
    var portalGR = new GlideRecord("sp_portal");
    portalGR.query();
    while(portalGR.next()) {
      var m2mPortalSourceGR = new GlideRecord("m2m_sp_portal_search_source");
      m2mPortalSourceGR.addQuery("sp_portal", portalGR.getUniqueValue());
      m2mPortalSourceGR.addQuery("sp_search_source", searchSourceGR.getUniqueValue());
      m2mPortalSourceGR.query();
      if (!m2mPortalSourceGR.next()) {
        m2mPortalSourceGR.initialize();
        m2mPortalSourceGR.setValue("sp_portal", portalGR.getUniqueValue());
        m2mPortalSourceGR.setValue("sp_search_source", searchSourceGR.getUniqueValue());
        m2mPortalSourceGR.setValue("order", "200");
        m2mPortalSourceGR.insert();
      }
    }
  }
})();
