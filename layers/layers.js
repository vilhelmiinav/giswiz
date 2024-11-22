var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_Kapsi_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://tiles.kartat.kapsi.fi/taustakartta?",
    attributions: ' &middot; <a href="">National Land Survey, CC-BY-4.0 via kartat.kapsi.fi</a>',
                              params: {
                                "LAYERS": "taustakartta",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Kapsi",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Kapsi_1, 0]);
var lyr_Landcoverwithin100moftheriver_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "Land cover within 100 m of the river",
                            
maxResolution:5.600893230452393,

                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Landcoverwithin100moftheriver_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [2542236.567125, 8480673.957213, 2596417.187733, 8533732.142839]
                            })
                        });
var format_Potentialgreencorridor_3 = new ol.format.GeoJSON();
var features_Potentialgreencorridor_3 = format_Potentialgreencorridor_3.readFeatures(json_Potentialgreencorridor_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Potentialgreencorridor_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Potentialgreencorridor_3.addFeatures(features_Potentialgreencorridor_3);
var lyr_Potentialgreencorridor_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Potentialgreencorridor_3,
maxResolution:7.00111653806549,
 
                style: style_Potentialgreencorridor_3,
                popuplayertitle: "Potential green corridor",
                interactive: true,
    title: 'Potential green corridor<br />\
    <img src="styles/legend/Potentialgreencorridor_3_0.png" /> Min width (5 m)<br />\
    <img src="styles/legend/Potentialgreencorridor_3_1.png" /> Artificial surface or agriculture<br />'
        });
var format_Break_4 = new ol.format.GeoJSON();
var features_Break_4 = format_Break_4.readFeatures(json_Break_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Break_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Break_4.addFeatures(features_Break_4);cluster_Break_4 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Break_4
});
var lyr_Break_4 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Break_4,
maxResolution:19.603126306583373,
 
                style: style_Break_4,
                popuplayertitle: "Break",
                interactive: true,
                title: '<img src="styles/legend/Break_4.png" /> Break'
            });
var lyr_Landcoverwithin100moftheriver_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "Land cover within 100 m of the river",
                            
maxResolution:5.600893230452393,

                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Landcoverwithin100moftheriver_5.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [2442295.073432, 8516071.837887, 2490329.053026, 8564698.445376]
                            })
                        });
var format_Potentialgreencorridor_6 = new ol.format.GeoJSON();
var features_Potentialgreencorridor_6 = format_Potentialgreencorridor_6.readFeatures(json_Potentialgreencorridor_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Potentialgreencorridor_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Potentialgreencorridor_6.addFeatures(features_Potentialgreencorridor_6);
var lyr_Potentialgreencorridor_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Potentialgreencorridor_6,
maxResolution:7.00111653806549,
 
                style: style_Potentialgreencorridor_6,
                popuplayertitle: "Potential green corridor",
                interactive: true,
    title: 'Potential green corridor<br />\
    <img src="styles/legend/Potentialgreencorridor_6_0.png" /> Min width (5 m)<br />\
    <img src="styles/legend/Potentialgreencorridor_6_1.png" /> Artificial surface or agriculture<br />'
        });
var format_Break_7 = new ol.format.GeoJSON();
var features_Break_7 = format_Break_7.readFeatures(json_Break_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Break_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Break_7.addFeatures(features_Break_7);cluster_Break_7 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Break_7
});
var lyr_Break_7 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Break_7,
maxResolution:19.603126306583373,
 
                style: style_Break_7,
                popuplayertitle: "Break",
                interactive: true,
                title: '<img src="styles/legend/Break_7.png" /> Break'
            });
var lyr_Landcoverwithin100moftheriver_8 = new ol.layer.Image({
                            opacity: 1,
                            title: "Land cover within 100 m of the river",
                            
maxResolution:5.600893230452393,

                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Landcoverwithin100moftheriver_8.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [2493154.468900, 8506918.634192, 2526048.462008, 8535926.195138]
                            })
                        });
var format_Potentialgreencorridor_9 = new ol.format.GeoJSON();
var features_Potentialgreencorridor_9 = format_Potentialgreencorridor_9.readFeatures(json_Potentialgreencorridor_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Potentialgreencorridor_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Potentialgreencorridor_9.addFeatures(features_Potentialgreencorridor_9);
var lyr_Potentialgreencorridor_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Potentialgreencorridor_9,
maxResolution:7.00111653806549,
 
                style: style_Potentialgreencorridor_9,
                popuplayertitle: "Potential green corridor",
                interactive: true,
    title: 'Potential green corridor<br />\
    <img src="styles/legend/Potentialgreencorridor_9_0.png" /> Min width (5 m)<br />\
    <img src="styles/legend/Potentialgreencorridor_9_1.png" /> Artificial surface or agriculture<br />'
        });
var format_Break_10 = new ol.format.GeoJSON();
var features_Break_10 = format_Break_10.readFeatures(json_Break_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Break_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Break_10.addFeatures(features_Break_10);cluster_Break_10 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Break_10
});
var lyr_Break_10 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Break_10,
maxResolution:19.603126306583373,
 
                style: style_Break_10,
                popuplayertitle: "Break",
                interactive: true,
                title: '<img src="styles/legend/Break_10.png" /> Break'
            });
var format_Rivers_11 = new ol.format.GeoJSON();
var features_Rivers_11 = format_Rivers_11.readFeatures(json_Rivers_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rivers_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rivers_11.addFeatures(features_Rivers_11);
var lyr_Rivers_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rivers_11, 
                style: style_Rivers_11,
                popuplayertitle: "Rivers",
                interactive: true,
                title: '<img src="styles/legend/Rivers_11.png" /> Rivers'
            });
var format_Conservationareas_12 = new ol.format.GeoJSON();
var features_Conservationareas_12 = format_Conservationareas_12.readFeatures(json_Conservationareas_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Conservationareas_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Conservationareas_12.addFeatures(features_Conservationareas_12);
var lyr_Conservationareas_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Conservationareas_12, 
                style: style_Conservationareas_12,
                popuplayertitle: "Conservation areas",
                interactive: true,
                title: '<img src="styles/legend/Conservationareas_12.png" /> Conservation areas'
            });
var group_Savijoki = new ol.layer.Group({
                                layers: [lyr_Landcoverwithin100moftheriver_8,lyr_Potentialgreencorridor_9,lyr_Break_10,],
                                fold: "open",
                                title: "Savijoki"});
var group_Hirvijoki = new ol.layer.Group({
                                layers: [lyr_Landcoverwithin100moftheriver_5,lyr_Potentialgreencorridor_6,lyr_Break_7,],
                                fold: "open",
                                title: "Hirvijoki"});
var group_Halikonjoki = new ol.layer.Group({
                                layers: [lyr_Landcoverwithin100moftheriver_2,lyr_Potentialgreencorridor_3,lyr_Break_4,],
                                fold: "open",
                                title: "Halikonjoki"});
var group_Basemap = new ol.layer.Group({
                                layers: [lyr_GoogleSatellite_0,lyr_Kapsi_1,],
                                fold: "open",
                                title: "Base map"});

lyr_GoogleSatellite_0.setVisible(true);lyr_Kapsi_1.setVisible(true);lyr_Landcoverwithin100moftheriver_2.setVisible(true);lyr_Potentialgreencorridor_3.setVisible(true);lyr_Break_4.setVisible(true);lyr_Landcoverwithin100moftheriver_5.setVisible(true);lyr_Potentialgreencorridor_6.setVisible(true);lyr_Break_7.setVisible(true);lyr_Landcoverwithin100moftheriver_8.setVisible(true);lyr_Potentialgreencorridor_9.setVisible(true);lyr_Break_10.setVisible(true);lyr_Rivers_11.setVisible(true);lyr_Conservationareas_12.setVisible(true);
var layersList = [group_Basemap,group_Halikonjoki,group_Hirvijoki,group_Savijoki,lyr_Rivers_11,lyr_Conservationareas_12];
lyr_Potentialgreencorridor_3.set('fieldAliases', {'fid_int': 'fid_int', 'fid': 'fid', 'DN': 'DN', 'Shape_Area': 'Break area (m2)', 'Land use': 'Break area (m2)', });
lyr_Break_4.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'Shape_Area': 'Break area (m2)', 'Land use': 'Break area (m2)', });
lyr_Potentialgreencorridor_6.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'Land use': 'Land use type', 'Shape_Area': 'Break area (m2)', });
lyr_Break_7.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'Land use': 'Land use type', 'Shape_Area': 'Break area (m2)', });
lyr_Potentialgreencorridor_9.set('fieldAliases', {'fid': 'fid', 'Shape_Area': 'Break area (m2)', 'Land_use': 'Land use type', });
lyr_Break_10.set('fieldAliases', {'fid': 'fid', 'Shape_Area': 'Break area (m2)', 'Land_use': 'Land_use', });
lyr_Rivers_11.set('fieldAliases', {'fid': 'Name', 'River': 'River', });
lyr_Conservationareas_12.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Type': 'Type', 'Area in ha': 'Area (ha)', });
lyr_Potentialgreencorridor_3.set('fieldImages', {'fid_int': 'Hidden', 'fid': 'Hidden', 'DN': 'Hidden', 'Shape_Area': 'TextEdit', 'Land use': 'TextEdit', });
lyr_Break_4.set('fieldImages', {'fid': 'Hidden', 'DN': 'Hidden', 'Shape_Area': 'TextEdit', 'Land use': 'TextEdit', });
lyr_Potentialgreencorridor_6.set('fieldImages', {'fid': 'Hidden', 'DN': 'Hidden', 'Land use': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Break_7.set('fieldImages', {'fid': 'Hidden', 'DN': 'Hidden', 'Land use': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Potentialgreencorridor_9.set('fieldImages', {'fid': 'Hidden', 'Shape_Area': 'TextEdit', 'Land_use': 'TextEdit', });
lyr_Break_10.set('fieldImages', {'fid': 'Hidden', 'Shape_Area': 'TextEdit', 'Land_use': 'TextEdit', });
lyr_Rivers_11.set('fieldImages', {'fid': 'Hidden', 'River': 'TextEdit', });
lyr_Conservationareas_12.set('fieldImages', {'fid': 'Hidden', 'Name': 'TextEdit', 'Type': 'TextEdit', 'Area in ha': 'TextEdit', });
lyr_Potentialgreencorridor_3.set('fieldLabels', {'Shape_Area': 'inline label - visible with data', 'Land use': 'inline label - visible with data', });
lyr_Break_4.set('fieldLabels', {'Shape_Area': 'inline label - visible with data', 'Land use': 'inline label - visible with data', });
lyr_Potentialgreencorridor_6.set('fieldLabels', {'Land use': 'inline label - visible with data', 'Shape_Area': 'inline label - visible with data', });
lyr_Break_7.set('fieldLabels', {'Land use': 'inline label - visible with data', 'Shape_Area': 'inline label - visible with data', });
lyr_Potentialgreencorridor_9.set('fieldLabels', {'Shape_Area': 'inline label - visible with data', 'Land_use': 'inline label - visible with data', });
lyr_Break_10.set('fieldLabels', {'Shape_Area': 'inline label - visible with data', 'Land_use': 'no label', });
lyr_Rivers_11.set('fieldLabels', {'River': 'header label - visible with data', });
lyr_Conservationareas_12.set('fieldLabels', {'Name': 'inline label - always visible', 'Type': 'inline label - visible with data', 'Area in ha': 'inline label - visible with data', });
lyr_Conservationareas_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});