Tunnel = module("vrp", "lib/Tunnel")
Proxy = module("vrp", "lib/Proxy")

vRP = Proxy.getInterface('vRP')
vRPC = Tunnel.getInterface('vRP')
BoirplateClient = Tunnel.getInterface("boirplate")

Boirplate = {}
Tunnel.bindInterface('boirplate', Boirplate)