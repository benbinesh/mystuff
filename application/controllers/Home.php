<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Home extends CI_Controller
{

	/**
	 * Index Page for this controller.
	 *
	 */
	public function index()
	{
		print_r($_ENV);
		$data = array();
		$data['view'] = 'home/index';
		$this->load->vars($data);
		$this->load->view('_layout_main');

	}
}
