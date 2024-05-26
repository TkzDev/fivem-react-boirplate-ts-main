fx_version 'cerulean'
game 'gta5'
lua54 'yes'


server_scripts {
  "@vrp/lib/utils.lua",
  "shared/*.lua",
  "server-main/loadcomponents-boirplate.lua",
  "server-main/controller-*.lua",
}

client_scripts {
  "@vrp/lib/utils.lua",
  "shared/*.lua",
  "client-main/loadcomponents-boirplate.lua",
  "client-main/controller-*.lua",
}

-- files {
  --     'web-ui/dist/index.html',
  -- 	'web-ui/dist/**/*',
-- }
-- ui_page "web-ui/dist/index.html"
    
ui_page "http://localhost:5173/" -- MODE DEVELPOMENT
