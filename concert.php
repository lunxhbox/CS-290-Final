<?php
// Array of upcoming concert dates
$concertDates = array(
    "2024-04-10" => "New York City, NY",
    "2024-04-15" => "Los Angeles, CA",
    "2024-04-20" => "London, UK"
);
?>

<h2>Upcoming Concert Dates</h2>
<ul>
    <?php
    // Loop through the concert dates array and display each date and location
    foreach ($concertDates as $date => $location) {
        echo "<li>$date: $location</li>";
    }
    ?>
</ul>

<?php
// Include the PHP file
include 'concert.php';
?>
