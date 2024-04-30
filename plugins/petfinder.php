<?php
/**
 * Plugin Name: Pet Finder API Plugin
 * Description: Integrates with a pet finding API to display missing pets on your WordPress site.
 * Version: 1.0.0
 * Author: Marko Miletic
 * Author URI: https://github.com/Najzeko 
 */

function getPetData() {
    return [
        [
            "animal" => "cat",
            "name" => "Furball",
            "color" => "black"
        ],
        [
            "animal" => "dog",
            "name" => "Rex",
            "color" => "brown"
        ],
        [
            "animal" => "bird",
            "name" => "Tweety",
            "color" => "yellow"
        ],
        [
            "animal" => "fish",
            "name" => "Splash",
            "color" => "gold"
        ],
        [
            "animal" => "hamster",
            "name" => "Nibbles",
            "color" => "white"
        ],
        [
            "animal" => "cat",
            "name" => "Whiskers",
            "color" => "gray"
        ],
        [
            "animal" => "dog",
            "name" => "Buddy",
            "color" => "black and white"
        ],
        [
            "animal" => "parrot",
            "name" => "Polly",
            "color" => "green"
        ],
        [
            "animal" => "rabbit",
            "name" => "Fluffy",
            "color" => "white"
        ],
        [
            "animal" => "snake",
            "name" => "Slither",
            "color" => "green"
        ]
    ];
}

add_action( 'rest_api_init', function () {
    register_rest_route( 'petfinder/v1', '/pets', array(
      'methods' => 'GET',
      'callback' => 'getPetData',
    ) );
  } );