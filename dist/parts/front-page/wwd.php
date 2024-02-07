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
<div id="wwd" class="xl:rounded-r-[2.778vw] bg-hover_color s:w-[375px] s:h-[475px] xl:w-[47.153vw] xl:h-[51.042vw] s:block xl:inline-block xl:mt-[10.554vw]">
    <div class="w-[36.597vw] h-[41.576vw] xl:mt-[5.625vw] xl:mr-[5.278vw] mb-[5.694vw] xl:ml-[5.278vw]">

    <?php


// Loop through each product and display it in a card
    $lastIndexString = "hidden";

    foreach ($products as $key => $product) {

?>
        <div class="inline-block opacity-1 " id="onclick_element_<?php echo $product["id"]; ?>">
            <div class="s:w-[375px] xl:w-auto xl:h-auto s:h-[125px] mt-[15px] xl:mt-[0px]" >
                    <img src="<?php echo $product["Image"]; ?>" alt="" class="  s:w-[80px] s:h-[80px] xl:w-[11.041vw] xl:inline-block xl:h-[11.041vw] s:float-left xl:float-none s:mt-[7px] xl:mt-[0px]">
                <div class=" s:w-[240px] s:h-[80px] xl:w-[22.083vw] xl:h-[4.583vw] s:inline-block xl:float-right xl:mt-[3.125vw] s:ml-[10px] xl:ml-[3.472vw] ">
                    <p class="text-white s:text-[16px] xl:text-[1.111vw] font-normal leading-normal"><span class="font-extrabold underline"><?php echo $product["description"]; ?></p>
                </div>
            </div>
            <div id="img-ror-<?php echo $product["id"]; ?>" class="s:w-[4px] s:h-[24px] xl:w-[0.278vw] xl:h-[1.667vw]  flex-shrink-0 rounded-full bg-vertical_orange_line xl:mt-[1.250vw] mb-[1.389vw] ml-[5.556vw] "></div>
        </div>
        <?php
        }
        ?>
    </div>
</div>


