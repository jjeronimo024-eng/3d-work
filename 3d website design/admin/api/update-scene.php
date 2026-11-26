<?php

$data = json_decode(file_get_contents("php://input"), true);

$stage = $data["stage"];
$json = $data["data"];

file_put_contents("../data/" . $stage . ".json", $json);

echo json_encode(["status" => "saved"]);