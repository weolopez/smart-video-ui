/**
 * This file/module contains all configuration for the build process.
 */
module.exports = {
	/**
	 * The `build_dir` folder is where our projects are compiled during
	 * development and the `compile_dir` folder is where our app resides once
	 * it's completely built.
	 */
	build_dir : 'build',
	compile_dir : 'bin',
	app_files : {
		html : [ 'app/**/*.html', '**.jsp' ],
		js : [ 'app/**/*.js' ],
		fonts : 'assets/fonts/*.*',
		css : 'src/assets/**/*.css',
		animate_css : 'src/app/**/*.css',
		audio : 'app/**/*.mp3',
		app_css : 'app/**/*.css',
		globalImg:['assets/**/*.png','assets/**/*.jpg','assets/**/*.gif'],
		img : [ 'app/**/*.png', 'app/**/*.jpg', 'app/**/*.gif' ]
		
	},
	
	data_dest : 'assets/',
	lib_files : 'lib/**/*.js',
	css_dest : 'assets/css/styles.css',
	files_list : {
		css : [ '<%= build_dir %>/**/*.css',
				'!<%= build_dir %>/assets/css/styles.css',
				'!<%= build_dir %>/assets/css/styles.min.css' ],
		js : [ '<%= build_dir %>/app/app.js', '<%= build_dir %>/app/**/*.js',
				'!<%= build_dir %>/app/application_tmp.js',
				'!<%= build_dir %>/app/application.js',
				'!<%= build_dir %>/app/application_min.js',
				'!<%= build_dir %>/app/config/*.js' ]
										
	},
	js_list:[
	         '<%= build_dir %>/app/admin/**/*.js'
	         ]

};