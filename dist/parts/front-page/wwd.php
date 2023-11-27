<?php

// Read JSON file
$jsonData = file_get_contents(__DIR__ . '/data.json');

// Check if JSON data is valid
$data = json_decode($jsonData, true);
if (json_last_error() != JSON_ERROR_NONE) {
    die("Error decoding JSON: " . json_last_error_msg());
}

// Function to filter data by category
function filterByCategory(array $data, string $category): array {
    return array_filter($data, fn($item) => $item['category'] === $category);
}

// Example: Filter by category 'wwd'
$categoryFilter = 'wwd';
$products = filterByCategory($data, $categoryFilter);

?>
<div id="wwd" class="rounded-r-[2.778vw] bg-hover_color w-[47.153vw] h-[51.042vw] inline-block mt-[10.554vw]">
    <div class="w-[36.597vw] h-[41.576vw] mt-[5.625vw] mr-[5.278vw] mb-[5.694vw] ml-[5.278vw]">

    <?php


// Loop through each product and display it in a card
    $lastIndexString = "hidden";

    foreach ($products as $key => $product) {

?>
        <div class="inline-block opacity-1" id="onclick_element_<?php echo $product["id"]; ?>">
            <img src="<?php echo $product["Image"]; ?>" alt="" class="w-[11.041vw] inline-block h-[11.041vw]">
            <div class="w-[22.083vw] h-[4.583vw] float-right mt-[3.125vw] ml-[3.472vw]">
                <p class="text-white text-[1.111vw] font-normal leading-normal"><span class="font-extrabold underline"><?php echo $product["description"]; ?><</p>
            </div>
            <div id="img-ror-<?php echo $product["id"]; ?>" class="w-[0.278vw] h-[1.667vw]  flex-shrink-0 rounded-full bg-vertical_orange_line mt-[1.250vw] mb-[1.389vw] ml-[5.556vw] "></div>
        </div>
        <?php
        }

        ?>

    </div>
    </div>


