<?php
/**
 * Plugin Name: Bootstrap4 Container — Gutenberg Block Plugin
 * Plugin URI: https://github.com/skang77e/bs4-container-gutenberg-block.git
 * Description: Bootstrap4 Container Block — is a Gutenberg plugin created via create-guten-block.
 * Author: Jon Kang
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
