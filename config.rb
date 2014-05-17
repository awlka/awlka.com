preferred_syntax = :scss

http_path = ''

css_dir = 'public/build/css'
sass_dir = 'public/assets/_sass'
images_dir = 'public/build/img'
javascripts_dir = 'public/build/js'

relative_assets = false
line_comments = false
output_style = :compressed

asset_cache_buster :none

Sass::Script::Number.precision = 8