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
		tpljs : [ 'app/template/**/*.js' ],
		fonts : 'assets/fonts/*.*',
		css : 'src/assets/**/*.css',
		animate_css : 'src/app/**/*.css',
		audio : [ 'app/**/*.mp3', 'app/**/*.mp4', 'app/**/*.m4a' ],
		app_css : 'app/**/*.css',
		globalImg:['assets/**/*.png','assets/**/*.jpg','assets/**/*.gif'],
		img : [ 'app/**/*.png', 'app/**/*.jpg', 'app/**/*.gif' ]
		
	},
	
	data_dest : 'assets/',
	lib_files : [ 'lib/**/*.js', 'lib/**/*.css' ],
	css_dest : 'assets/css/styles.css',
	files_list : {
		css : [ '<%= build_dir %>/**/*.css',
				'!<%= build_dir %>/assets/css/styles.css',
				'!<%= build_dir %>/assets/css/styles.min.css' ],
		js : [ '<%= build_dir %>/app/config/config.js', '<%= build_dir %>/app/app.js',
						'!<%= build_dir %>/app/application_tmp.js',
						'!<%= build_dir %>/app/application.js',
						'!<%= build_dir %>/app/application.min.js'
						],
		libJS : [ '<%= build_dir %>/lib/angularjs/angular.min.js',
				'<%= build_dir %>/lib/angularjs/angular-route.min.js',
				'<%= build_dir %>/lib/angularjs/angular-sanitize.min.js',
				'<%= build_dir %>/lib/jquery/jquery-2.2.0.min.js',
				'<%= build_dir %>/lib/script-loader/script.min.js'
				],	
		videolibJS : [ '<%= build_dir %>/lib/videojs/video.min.js',
		         '<%= build_dir %>/lib/videojs/videojs.ga.min.js'
				],	
		adobelibJS : [ '<%= build_dir %>/lib/createjs/easeljs-0.8.2.min.js',
			  '<%= build_dir %>/lib/createjs/tweenjs-0.5.1.min.js',
			  '<%= build_dir %>/lib/createjs/movieclip-0.7.1.min.js',
			  '<%= build_dir %>/lib/createjs/preloadjs-0.4.1.min.js',
								],
										
	},
	js_list:[
	         '<%= build_dir %>/app/admin/**/*.js'
	         ]

};