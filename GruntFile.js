module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-html');
	grunt.loadNpmTasks('grunt-css');
	grunt.loadNpmTasks('grunt-recess');
	grunt.loadNpmTasks('grunt-karma');
	grunt.loadNpmTasks('grunt-ngmin');
	grunt.loadNpmTasks('grunt-html2js');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');

	var userConfig = require('./build-config.js');

	var taskConfig = {
		pkg : grunt.file.readJSON("package.json"),
		meta : {
			banner : '/**\n'
					+ ' * <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n'
					+ ' * <%= pkg.homepage %>\n'
					+ ' *\n'
					+ ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n'
					+ ' * Licensed <%= pkg.licenses.type %> <<%= pkg.licenses.url %>>\n'
					+ ' */\n'
		},
		clean : {
			src : [ '<%= build_dir %>', '<%= compile_dir %>' ]
		},
		copy : {
			
			build_lib : {
				files : [ {
					src : '<%=lib_files%>',
					dest : '<%= build_dir %>/',
					cwd : 'src',
					expand : true
				} ]
			},
			htmls : {
				files : [ {
					src : [ '<%= app_files.html %>' ],
					dest : '<%= build_dir %>/',
					cwd : 'src',
					expand : true
				} ]
			},
			imgs : {
				files : [ {
					src : [ '<%= app_files.img %>' ],
					dest : '<%= build_dir %>/',
					cwd : 'src',
					expand : true
				} ]
			},
			globalImg : {
				files : [ {
					src : [ '<%= app_files.globalImg %>' ],
					dest : '<%= build_dir %>/',
					cwd : 'src',
					expand : true
				} ]
			},
			fonts : {
				files : [ {
					src : [ '<%= app_files.fonts %>' ],
					dest : '<%= build_dir %>/',
					cwd : 'src',
					expand : true
				} ]
			},
			data : {
				files : [ {
					src : [ 'assets/data/**.json' , 'assets/data/**.vtt'],
					dest : '<%= build_dir %>/',
					cwd : 'src',
					expand : true
				} ]
			},
			js : {
				files : [ {
					src : [ '<%= app_files.js %>' ],
					dest : '<%= build_dir %>/',
					cwd : 'src',
					expand : true
				} ]
			},
			css : {
				files : [ {
					src : [ '<%= app_files.app_css %>' ],
					dest : '<%= build_dir %>/',
					cwd : 'src',
					expand : true
				} ]
			},
			audio : {
				files : [ {
					src : [ '<%= app_files.audio %>' ],
					dest : '<%= build_dir %>/',
					cwd : 'src',
					expand : true
				} ]
			},
			index : {
				files : [ {
					src : [ 'index.*' ],
					dest : '<%= build_dir %>/',
					cwd : 'src',
					expand : true
				} ]
			},
			indexProd : {
				files : [ {
					src : [ 'src/index_prod.html' ],
					dest : '<%= build_dir %>/index.html'
				} ]
			}
		},
		csslint : {
			strict : {
				options : {
					import : 2,
					csslintrc : 'csslintrc'
				},
				src : [ '<%= app_files.css %>' ],
				rules : {

					'important' : false,
					'adjoining-classes' : false,
					'known-properties' : false,
					'box-sizing' : false,
					'box-model' : false,
					'overqualified-elements' : false,
					'display-property-grouping' : false,
					'bulletproof-font-face' : false,
					'compatible-vendor-prefixes' : false,
					'regex-selectors' : false,
					'errors' : false,
					'duplicate-background-images' : false,
					'duplicate-properties' : false,
					'empty-rules' : false,
					'selector-max-approaching' : false,
					'gradients' : false,
					'fallback-colors' : false,
					'font-sizes' : false,
					'font-faces' : false,
					'floats' : false,
					'star-property-hack' : false,
					'outline-none' : false,
					'import' : false,
					'ids' : false,
					'underscore-property-hack' : false,
					'rules-count' : false,
					'qualified-headings' : false,
					'selector-max' : false,
					'shorthand' : false,
					'text-indent' : false,
					'unique-headings' : false,
					'universal-selector' : false,
					'unqualified-attributes' : false,
					'vendor-prefix' : false,
					'zero-units' : false

				}

			},
			lax : {
				options : {
					import : false,
					csslintrc : 'csslintrc'
				},
				src : [ '<%= app_files.css %>' ],
				rules : {
					'important' : false,
					'adjoining-classes' : false,
					'known-properties' : false,
					'box-sizing' : false,
					'box-model' : false,
					'overqualified-elements' : false,
					'display-property-grouping' : false,
					'bulletproof-font-face' : false,
					'compatible-vendor-prefixes' : false,
					'regex-selectors' : false,
					'errors' : false,
					'duplicate-background-images' : false,
					'duplicate-properties' : false,
					'empty-rules' : false,
					'selector-max-approaching' : false,
					'gradients' : false,
					'fallback-colors' : false,
					'font-sizes' : false,
					'font-faces' : false,
					'floats' : false,
					'star-property-hack' : false,
					'outline-none' : false,
					'import' : false,
					'ids' : false,
					'underscore-property-hack' : false,
					'rules-count' : false,
					'qualified-headings' : false,
					'selector-max' : false,
					'shorthand' : false,
					'text-indent' : false,
					'unique-headings' : false,
					'universal-selector' : false,
					'unqualified-attributes' : false,
					'vendor-prefix' : false,
					'zero-units' : false
				}
			}

		},
		concat : {
			app_css : {
				src : [ '<%= app_files.css %>' ],
				dest : '<%= build_dir %>/assets/css/styles.css'
			},
			animate_css : {
				src : [ '<%= app_files.animate_css %>' ],
				dest : '<%= build_dir %>/app/template/styles.css'
			},
			
			app_js : {
				src : [ '<%= files_list.js %>' ],
				dest : '<%= build_dir %>/app/application_tmp.js'
			},
			angular_js : {
				src : [ '<%= files_list.libJS %>' ],
				dest : '<%= build_dir %>/lib/lib.min.js'
			},
			video_js : {
				src : [ '<%= files_list.videolibJS %>' ],
				dest : '<%= build_dir %>/lib/video.min.js'
			},
			adobe_js : {
				src : [ '<%= files_list.adobelibJS %>' ],
				dest : '<%= build_dir %>/lib/adobelib.min.js'
			}
			

		},
		cssmin : {
			app_css : {
				src : '<%= build_dir %>/assets/css/styles.css',
				dest : '<%= build_dir %>/assets/css/styles.min.css'
			},
			animate_css : {
				src : '<%= build_dir %>/app/template/**/styles.css',
				dest : '<%= build_dir %>/app/template/**/animate.css'
			},
			
		},
		htmlmin : {
			options: {
		        removeComments: true,
		        collapseWhitespace: true
		      },
			multiple : { // Target
				files : [ { // Dictionary of files
					expand : true,
					cwd : 'src/', // Project root
					src : '<%= app_files.html %>', // Source
					dest : '<%= build_dir %>/' // Destination
				} ]
			}
		},
		ngmin : {
			app_js : {
				files : [ {
					src : [ '<%= build_dir %>/app/application_tmp.js' ],
					dest : '<%= build_dir %>/app/application.js'
				} ]
			},
			template_js : {
				files : [ {
					expand : true,
					cwd : 'src/',
					src : [ '<%= app_files.tpljs %>' ],
					dest : '<%= build_dir %>/'
				} ]
			},
			all_js : {
				files : [ {
					expand : true,
					cwd : 'src/',
					src : [ '<%= app_files.js %>' ],
					dest : '<%= build_dir %>/'
				} ]
			}
			
		},
		uglify : {
			app_js : {
				files : {
					'<%= build_dir %>/app/application.min.js' : '<%= build_dir %>/app/application.js'
				}
			},
			scriptjs : {
				files : {
					'<%= build_dir %>/lib/script-loader/script.min.js' : '<%= build_dir %>/lib/script-loader/script.js'
				}
			},
			ecare_js : {
				files : {
					'<%= build_dir %>/app/template/ecare/js/animate.min.js' : '<%= build_dir %>/app/template/ecare/js/animate.js'
				}
			},
			template_js1 : {
				files : [ {
					expand : true,
					cwd : '<%= build_dir %>/',
					src : [ '<%= app_files.tpljs %>'],
					dest : '<%= build_dir %>/',
					ext:'.min.js'
					
				} ]
			}
			
		},
		/**
		 * This task compiles the karma template so that changes to its file
		 * array don't have to be managed manually.
		 */
		karmaconfig : {
			unit : {
				dir : '<%= build_dir %>',
				src : ['<%= html2js.app.dest %>',
						'<%= html2js.common.dest %>', '<%= test_files.js %>' ]
			}
		},

		/**
		 * And for rapid development, we have a watch set up that checks to see
		 * if any of the files listed below change, and then to execute the
		 * listed tasks when they do. This just saves us from having to type
		 * "grunt" into the command-line every time we want to see what we're
		 * working on; we can instead just leave "grunt watch" running in a
		 * background terminal. Set it and forget it, as Ron Popeil used to tell
		 * us.
		 * 
		 * But we don't need the same thing to happen for all the files.
		 */
		delta : {
			/**
			 * By default, we want the Live Reload to work for all tasks; this
			 * is overridden in some tasks (like this file) where browser
			 * resources are unaffected. It runs by default on port 35729, which
			 * your browser plugin should auto-detect.
			 */
			options : {
				livereload : true
			},

			/**
			 * When the Gruntfile changes, we just want to lint it. In fact,
			 * when your Gruntfile changes, it will automatically be reloaded!
			 */
			gruntfile : {
				files : 'Gruntfile.js',
				tasks : [ 'jshint:gruntfile' ],
				options : {
					livereload : false
				}
			},
			jsondata : {
				files : [ 'src/app/**/*.json' ],
				tasks : [ 'copy:build_app_data' ]
			},
			/**
			 * When our JavaScript source files change, we want to run lint them
			 * and run our unit tests.
			 */
			jssrc : {
				files : [ '<%= app_files.js %>' ],
				// tasks: [ 'jshint:src', 'copy:build_appjs' ,'karma:unit:run']
				tasks : [ 'jshint:src', 'copy:build_appjs' ]
			},

			// Coffee scripts are not used in CPST

			/**
			 * When our CoffeeScript source files change, we want to run lint
			 * them and run our unit tests.
			 */

			/*
			 * coffeesrc: { files: [ '<%= app_files.coffee %>' ], tasks: [
			 * 'coffeelint:src', 'coffee:source', 'karma:unit:run',
			 * 'copy:build_appjs' ] },
			 */

			/**
			 * When assets are changed, copy them. Note that this will *not*
			 * copy new files, so this is probably not very useful.
			 */
			assets : {
				files : [ 'src/assets/**/*' ],
				tasks : [ 'copy:build_app_assets',
						'copy:build_app_assets_styles' ]
			},

			/**
			 * When index.html changes, we need to compile it.
			 */
			html : {
				files : [ '<%= app_files.html %>' ],
				tasks : [ 'index:build' ]
			},

			/**
			 * When our templates change, we only rewrite the template cache.
			 */
			tpls : {
				files : [ '<%= app_files.atpl %>', '<%= app_files.ctpl %>' ],
				tasks : [ 'html2js' ]
			},

			/**
			 * When the CSS files change, we need to compile and minify them.
			 */
			less : {
				files : [ 'src/**/*.less' ],
				tasks : [ 'recess:build' ]
			},

			/**
			 * When a JavaScript unit test file changes, we only want to lint it
			 * and run the unit tests. We don't want to do any live reloading.
			 */
			jsunit : {
				files : [ '<%= app_files.jsunit %>' ],
				tasks : [ 'jshint:test', 'karma:unit:run' ],
				options : {
					livereload : false
				}
			},

		/**
		 * When a CoffeeScript unit test file changes, we only want to lint it
		 * and run the unit tests. We don't want to do any live reloading.
		 */

		/*
		 * coffeeunit: { files: [ '<%= app_files.coffeeunit %>' ], tasks: [
		 * 'coffeelint:test', 'karma:unit:run' ], options: { livereload: false } }
		 */
		}

	};

	grunt.initConfig(grunt.util._.extend(taskConfig, userConfig));



	
	

	grunt.registerTask('default', [ 'clean', 'build', 'copy:index',
			'htmlmin','ngmin:all_js']);
	grunt.registerTask('dev', [ 'clean', 'build','htmlmin','copy:index','ngmin:all_js']);
	grunt.registerTask('prod', [ 'clean', 'build','htmlmin','copy:indexProd','minify']);
	grunt.registerTask('minify', [ 'concat:angular_js','concat:video_js','concat:adobe_js','concat:app_js',
	                               'ngmin:app_js','uglify:app_js','ngmin:template_js','uglify:ecare_js']);
	grunt.registerTask('buildCSS', [ 'concat:app_css' ])

	grunt.registerTask('build', [ 'copySource', 'csslint', 'buildCSS',
			'cssmin:app_css']);

	grunt.registerTask('copySource', [ 'copy:build_lib','copy:globalImg',
			 'copy:imgs', 'copy:fonts', 'copy:data', 'copy:js','copy:css','copy:audio'
			]);

	grunt.registerTask('incremental', ['copy:js']);
			
	/**
	 * In order to avoid having to specify manually the files needed for karma
	 * to run, we use grunt to manage the list for us. The `karma/*` files are
	 * compiled as grunt templates for use by Karma. Yay!
	 */
	grunt.registerMultiTask('karmaconfig', 'Process karma config templates',
			function() {
				var jsFiles = filterForJS(this.filesSrc);
				grunt.file.copy('karma/karma-unit.tpl.js', grunt
						.config('build_dir')
						+ '/karma-unit.js', {
					process : function(contents, path) {
						return grunt.template.process(contents, {
							data : {
								scripts : jsFiles
							}
						});
					}
				});
			});
};