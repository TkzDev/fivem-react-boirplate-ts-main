Tunnel = module("vrp", "lib/Tunnel")
Proxy = module("vrp", "lib/Proxy")

vRP = Proxy.getInterface('vRP')
vRPS = Tunnel.getInterface('vRP')

Boirplate = {}
Tunnel.bindInterface('boirplate', Boirplate)

function Boirplate.sendNui(actionNui)
	print(":Boirplate: sendNui")
	SetNuiFocus(true,true)
	SendNUIMessage({
		action = actionNui
	})
end

function Boirplate.closeNui()
	print(":Boirplate: closeNui")
	SetNuiFocus(false,false)
	SendNUIMessage({
		action = "closeNui",
		infos = {}
	})
end

RegisterNUICallback("close", function(data, cb)
	SetNuiFocus(false,false)
	cb("code-200")
end)