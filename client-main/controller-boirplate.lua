RegisterCommand("cl::boirplate",function()
  print("Hello world from server boirplate")
end)

RegisterCommand("cl::openNui",function()
  Boirplate.sendNui("showNui")
end)

RegisterNuiCallback("submitApply",function(data,cb)
  local action = data.action
  print("Return value callback submitApply", json.encode(data))
  cb("code-200")
end)