<?php
header('Content-Type: application/json; charset=utf-8');

// Hard JSON endpoint to guarantee the front-end can initialise.
// This bypasses DB / server config issues.

echo json_encode([
  'success' => true,
  'project' => 'Wine Cinematic Experience',
  'stages' => [
    ['id'=>1,'slug'=>'vineyard','title'=>'Vineyard','subtitle'=>'Viticulture, terroir, sunlight, soil and the foundations of flavour.','camera_x'=>0,'camera_y'=>2,'camera_z'=>6,'bloom'=>0.7,'sort_order'=>1],
    ['id'=>2,'slug'=>'harvest','title'=>'Harvest','subtitle'=>'Picking grapes at peak ripeness for the style of wine being made.','camera_x'=>0,'camera_y'=>2.2,'camera_z'=>6.2,'bloom'=>0.65,'sort_order'=>2],
    ['id'=>3,'slug'=>'crush','title'=>'Crushing & Destemming','subtitle'=>'Separating stems, breaking skins, and preparing fruit for fermentation.','camera_x'=>0,'camera_y'=>2.1,'camera_z'=>5.8,'bloom'=>0.6,'sort_order'=>3],
    ['id'=>4,'slug'=>'fermentation','title'=>'Fermentation','subtitle'=>'Yeast transforms sugar into alcohol, heat, and the first true expression of wine.','camera_x'=>0,'camera_y'=>2.3,'camera_z'=>5.9,'bloom'=>0.75,'sort_order'=>4],
    ['id'=>5,'slug'=>'press','title'=>'Pressing','subtitle'=>'Extracting the remaining juice and defining structure, texture, and style.','camera_x'=>0,'camera_y'=>2.0,'camera_z'=>6.1,'bloom'=>0.55,'sort_order'=>5],
    ['id'=>6,'slug'=>'barrels','title'=>'Aging / Maturation','subtitle'=>'Barrels and tanks shape tannins, complexity, aroma, and refinement over time.','camera_x'=>0,'camera_y'=>2.0,'camera_z'=>6.0,'bloom'=>0.7,'sort_order'=>6],
    ['id'=>7,'slug'=>'blending','title'=>'Blending','subtitle'=>'Combining lots, varietals, and barrel expressions into a signature house style.','camera_x'=>0,'camera_y'=>2.15,'camera_z'=>6.05,'bloom'=>0.6,'sort_order'=>7],
    ['id'=>8,'slug'=>'stabilisation','title'=>'Stabilisation & Filtration','subtitle'=>'Clarifying and protecting the wine before bottling and release.','camera_x'=>0,'camera_y'=>2.05,'camera_z'=>5.95,'bloom'=>0.55,'sort_order'=>8],
    ['id'=>9,'slug'=>'bottling','title'=>'Bottling','subtitle'=>'Filling, sealing, labelling, and preparing each bottle for its next journey.','camera_x'=>0,'camera_y'=>2.25,'camera_z'=>6.1,'bloom'=>0.65,'sort_order'=>9],
    ['id'=>10,'slug'=>'bottle-aging','title'=>'Bottle Aging','subtitle'=>'Some wines continue to evolve, soften, and deepen long after bottling.','camera_x'=>0,'camera_y'=>2.1,'camera_z'=>6.0,'bloom'=>0.7,'sort_order'=>10],
    ['id'=>11,'slug'=>'distribution','title'=>'Distribution','subtitle'=>'From cellar to restaurant, retailer, export market, and direct customer experience.','camera_x'=>0,'camera_y'=>2.0,'camera_z'=>6.0,'bloom'=>0.55,'sort_order'=>11],
    ['id'=>12,'slug'=>'experience','title'=>'The Experience','subtitle'=>'The final moment where craft, place, and storytelling are poured into the glass.','camera_x'=>0,'camera_y'=>2.3,'camera_z'=>6.2,'bloom'=>0.8,'sort_order'=>12]
  ]
]);

