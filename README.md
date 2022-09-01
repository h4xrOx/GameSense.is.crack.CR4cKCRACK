#I sell nothing ## https://gamesense.cloud
#I dont play games ## https://discord.gg/SjHFVAjFHj
#This repo was a honey pot ## https://h4xr0x.cc

```
cl_showfps 1
maxplayers 1
sv_cheats 1
+sv_pure 1
alias GAMESENSE ""
alias GAMESENS ""
alias GAMESEN ""
alias GAMESE ""
alias GAMES ""
alias GAME ""
alias GAM ""
alias GA ""
alias G ""

alias G         "cl_clanid 35297413 ;alias Clantag GA"
alias GA        "cl_clanid 35297418 ;alias Clantag GAM"
alias GAM       "cl_clanid 35297419 ;alias Clantag GAME"
alias GAME      "cl_clanid 35297422 ;alias Clantag GAMES"
alias GAMES     "cl_clanid 35297426 ;alias Clantag GAMESE"
alias GAMESE    "cl_clanid 35297431 ;alias Clantag GAMESEN"
alias GAMESEN   "cl_clanid 35297438 ;alias Clantag GAMESENS"
alias GAMESENS  "cl_clanid 35297445 ;alias Clantag GAMESENSE"
alias GAMESENSE "cl_clanid 35297410 ;alias Clantag GAMESENS2"
alias GAMESENS2 "cl_clanid 35297445 ;alias Clantag GAMESEN2"
alias GAMESEN2  "cl_clanid 35297438 ;alias Clantag GAMESE2"
alias GAMESE2   "cl_clanid 35297431 ;alias Clantag GAMES2"
alias GAMES2    "cl_clanid 35297426 ;alias Clantag GAME2"
alias GAME2     "cl_clanid 35297422 ;alias Clantag GAM2"
alias GAM2      "cl_clanid 35297419 ;alias Clantag GA2"
alias GA2       "cl_clanid 35297418 ;alias Clantag G"

alias Clantag "G"
```
# CheatVar

{% hint style="info" %}
You can access `CheatVar` instance through [g\_Config](../classes/Config.md)
{% endhint %}

## Functions

## GetBool

### Return value:

| Name | Type | Description |
| :--- | :--- | :--- |
| value | bool | CheatVar value as a bool |

### Parameters:

| Name | Type | Description | Required |
| :--- | :--- | :--- | :--- |
| el\_index | int | Element index for multicombo cheatvar | - |

```lua
local val = var:GetBool()
```

## GetFloat

### Return value:

| Name | Type | Description |
| :--- | :--- | :--- |
| value | float | CheatVar value as a float |

```lua
local val = var:GetFloat()
```

## GetInt

### Return value:

| Name | Type | Description |
| :--- | :--- | :--- |
| value | int | CheatVar value as int |

```lua
local val = var:GetInt()
```

## GetColor

### Return value:

| Name | Type | Description |
| :--- | :--- | :--- |
| value | Color | CheatVar value as Color |

```lua
local val = var:GetColor()
```

## GetString

### Return value:

| Name | Type | Description |
| :--- | :--- | :--- |
| value | string | CheatVar value as string |

```lua
local val = var:GetString()
```

## SetBool

### Parameters:

| Name | Type | Description | Required |
| :--- | :--- | :--- | :--- |
| el\_index | int | Element index for multicombo cheatvar | - |
| value | bool | New bool value | + |

```lua
local ref_fake_options = g_Config:FindVar("Aimbot", "Anti Aim", "Fake Angle", "Fake Options")
ref_fake_options:SetBool(3, true)
```

## SetInt

### Parameters:

| Name | Type | Description | Required |
| :--- | :--- | :--- | :--- |
| value | int | New int value | + |

```lua
var:SetInt(1)
```

## SetFloat

### Parameters:

| Name | Type | Description | Required |
| :--- | :--- | :--- | :--- |
| value | float | New float value | + |

```lua
var:SetFloat(1.5)
```

## SetColor

### Parameters:

| Name | Type | Description | Required |
| :--- | :--- | :--- | :--- |
| value | Color | New Color value | + |

```lua
var:SetColor(Color.new(1, 1, 1, 1))
```

## SetString

### Parameters:

| Name | Type | Description | Required |
| :--- | :--- | :--- | :--- |
| value | string | New string value | + |

```lua
var:SetString("Hello")
```

## RegisterCallback

### Parameters:

| Name | Type | Description | Required |
| :--- | :--- | :--- | :--- |
| value | function | Callback | + |

```lua
var:RegisterCallback(function()
	print("callback!")
end)
```

## SetVisible

### Parameters:

| Name | Type | Description | Required |
| :--- | :--- | :--- | :--- |
| value | bool | Item visibility | + |

```lua
var:SetVisible(false)
```

## DestroyItem

{% hint style="warning" %}
DestroyItem was previously incorrectly listed here. It has been moved to to the [Menu API](../other/menuapi.md#destroyitem)
{% endhint %}


## SetTooltip

### Parameters:

| Name | Type | Description | Required |
| :--- | :--- | :--- | :--- |
| value | string | Tooltip content | + |

```lua
var:SetTooltip("Tooltip")
```

## UpdateList

### Parameters:

| Name | Type | Description | Required |
| :--- | :--- | :--- | :--- |
| new combo items | table | Combo Items | + |

```lua
local combo = menu.Combo("Neverlose", "Combo", {"Element 1", "Element 2", "Element 3"}, 0, "Tooltip")
menu.Button("neverlose", "update"):RegisterCallback(function()	
	combo:UpdateList({"el1", "el2"})	
end)
```

## GetList

### Return value:

| Name | Type | Description |
| :--- | :--- | :--- |
| Combo elements | table | Returns all elements in combo |

```lua
local bodyAim = g_Config:FindVar("Aimbot", "Ragebot", "Accuracy", "Body Aim")
local list = bodyAim:GetList()

for _, item in ipairs(list) do
  print(item)
end
```

```bind "key" "Clantag"

```//antiaim
var jitter_cache = UI.GetValue("Anti-Aim", "Rage Anti-Aim", "Jitter offset")
var yaw_cache = UI.GetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset")
```
```function lowdeltaslow() {
    localplayer_index = Entity.GetLocalPlayer();

    if (UI.GetValue("Misc", "JAVASCRIPT", "Script items", "AA on slowwalk") && UI.IsHotkeyActive("Anti-Aim", "Extra", "Slow walk")) {
        UI.SetValue("Anti-Aim", "Fake-Lag", "Jitter", 0);
        UI.SetValue("Anti-Aim", "Fake-Lag", "Trigger limit", 16);
        UI.SetValue("Anti-Aim", "Fake-Lag", "Limit", 16);
        UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", -10);
        UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Jitter offset", 40);
        AntiAim.SetOverride(1);
        AntiAim.SetFakeOffset(0);
        AntiAim.SetRealOffset(-13);
    } else {
        UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Jitter offset", jitter_cache);
        AntiAim.SetOverride(0);
    }
    if (UI.GetValue("Misc", "JAVASCRIPT", "Script items", "AA on slowwalk") && !UI.IsHotkeyActive("Anti-Aim", "Extra", "Slow walk")) {
        UI.SetValue("Anti-Aim", "Fake-Lag", "Jitter", 100);
        UI.SetValue("Anti-Aim", "Fake-Lag", "Trigger limit", 16);
        UI.SetValue("Anti-Aim", "Fake-Lag", "Limit", 0);
        UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", 0);
        UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Jitter offset", 5);
        AntiAim.SetOverride(1);
        AntiAim.SetFakeOffset(0);
        AntiAim.SetRealOffset(-29);
    }
}
```Cheat.RegisterCallback("CreateMove", "lowdeltaslow");
```
```//local tracer

```var x = 0,
    y = 0,
    z = 0;
var eye_angles = [0, 0, 0];
var wts_impact = [0, 0, 0];
var render_time = 0;```

```function bullet_impact() {
    if (!UI.GetValue("Local Bullet Tracer"))
        return;```

    player = Event.GetInt("userid");
    player_id = Entity.GetEntityFromUserID(player);
    impact_x = Event.GetFloat("x"), impact_y = Event.GetFloat("y"), impact_z = Event.GetFloat("z");

    if (Entity.GetLocalPlayer() !== player_id)
        return;

    x = impact_x;
    y = impact_y;
    z = impact_z;

    eye_angles = Entity.GetEyePosition(Entity.GetLocalPlayer());
    render_time = Globals.Curtime();
}

```function drawed() {
    if (!UI.GetValue("Local Bullet Tracer"))
        return;

    wts_impact = Render.WorldToScreen([x, y, z]);
    wts_eye_angles = Render.WorldToScreen([eye_angles[0], eye_angles[1], eye_angles[2]]);

    if (wts_impact[2] === 1 && wts_eye_angles[2] === 1 //remove this and experience a mess
        &&
        (Globals.Curtime() - render_time) < 4) //4s just as the client/server impacts
        Render.Line(wts_eye_angles[0], wts_eye_angles[1], wts_impact[0], wts_impact[1], [61, 135, 224, 230]);
}

```Cheat.RegisterCallback("bullet_impact", "bullet_impact");
Cheat.RegisterCallback("Draw", "drawed");
```
//keybinds

```const keybinds_x = UI.AddSliderInt("keybinds_x", 0, Global.GetScreenSize()[0])
const keybinds_y = UI.AddSliderInt("keybinds_y", 0, Global.GetScreenSize()[1])
UI.SetValue("Misc", "JAVASCRIPT", "Script items", "keybinds_x", 0);
UI.SetValue("Misc", "JAVASCRIPT", "Script items", "keybinds_y", 655);

function in_bounds(vec, x, y, x2, y2) {
    return (vec[0] > x) && (vec[1] > y) && (vec[0] < x2) && (vec[1] < y2)
}

function xy() {
    UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "keybinds_x", false)
    UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "keybinds_y", false)
}
xy();```

```function keybinds() {
    if (UI.GetValue("Script items", "Enable binds list")) {
        var h = [];
        const fontpixel = Render.AddFont("MuseoSansCyrl-500", 12, 100);
        const fontpixel1 = Render.AddFont("MuseoSansCyrl-500", 13, 100);

        var lflt = UI.GetValue("Anti-aim", "Fake-Lag", "Limit");

        if (UI.GetValue("Anti-Aim", "Fake-Lag", "Enabled") && lflt > 0) {
            h.push("Fakelag - " + lflt)
        }
        if (UI.GetValue("Anti-Aim", "Rage Anti-Aim", "Manual dir")) {
            h.push("Manual direction")
        }
        if (UI.GetValue("Misc", "GENERAL", "Movement", "Auto bunnyhop") && Input.IsKeyPressed(0x20)) {
            h.push("Strafe")
        }
        if (UI.IsHotkeyActive("Visual", "WORLD", "View", "Thirdperson")) {
            h.push("Thirdperson")
        }
        if (UI.IsHotkeyActive("Anti-Aim", "Extra", "Slow walk")) {
            h.push("Slow walk")
        }
        if (UI.IsHotkeyActive("Anti-Aim", "Extra", "Fake duck")) {
            h.push("Fake duck")
        }
        if (UI.IsHotkeyActive("Misc", "General", "Movement", "Auto peek")) {
            h.push("Auto peek")
        }
        if (UI.IsHotkeyActive("Anti-Aim", "Fake angles", "Inverter")) {
            h.push("Inverter")
        }
        if (UI.IsHotkeyActive("Rage", "General", "General", "Force safe point")) {
            h.push("Safe point")
        }
        if (UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script items", "Minimum damage override")) {
            h.push("Dmg override")
        }
        if (UI.IsHotkeyActive("Rage", "General", "General", "Force body aim")) {
            h.push("Body aim")
        }
        if (UI.IsHotkeyActive("Anti-Aim", "Fake angles", "Desync on shot")) {
            h.push("On shot anti-aim")
        }
        if (UI.IsHotkeyActive("Rage", "Exploits", "Hide shots")) {
            h.push("Hide shots")
        }
        if (UI.IsHotkeyActive("Legit", "GENERAL", "Triggerbot", "Enabled")) {
            h.push("Triggerbot")
        }
        if (UI.IsHotkeyActive("Rage", "GENERAL", "General", "Resolver override")) {
            h.push("Resolver override")
        }
        if (UI.IsHotkeyActive("Rage", "Exploits", "Double tap")) {
            h.push("Double Tap")
        }

        const x = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "keybinds_x"),
            y = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "keybinds_y");

        const rainbow = [
            Math.floor(Math.sin(Global.Realtime() * 2) * 127 + 128),
            Math.floor(Math.sin(Global.Realtime() * 2 + 2) * 127 + 128),
            Math.floor(Math.sin(Global.Realtime() * 2 + 2) * 127 + 128),
            255
        ];


        Render.FilledRect(x, y, 200, 26, [0, 0, 10, 255]);
        Render.FilledRect(x + 1, y - 1, 198, 2, [0, 0, 10, 255]);
        Render.FilledRect(x + 2, y - 2, 196, 2, [0, 0, 10, 255]);
        Render.StringCustom(x + 39, y + 1, 0, "Binds", [255, 255, 255, 255], fontpixel1);

        Render.FilledRect(x + 7, y + 3, 24, 16, [34, 179, 246, 255]);
        Render.FilledRect(x + 8, y + 2, 24, 16, [34, 179, 246, 255]);

        Render.FilledRect(x + 10, y + 5, 3, 3, [0, 0, 10, 255])
        Render.FilledRect(x + 14, y + 5, 3, 3, [0, 0, 10, 255])
        Render.FilledRect(x + 18, y + 5, 3, 3, [0, 0, 10, 255])
        Render.FilledRect(x + 22, y + 5, 3, 3, [0, 0, 10, 255])
        Render.FilledRect(x + 26, y + 5, 3, 3, [0, 0, 10, 255])

        Render.FilledRect(x + 12, y + 9, 3, 3, [0, 0, 10, 255])
        Render.FilledRect(x + 16, y + 9, 3, 3, [0, 0, 10, 255])
        Render.FilledRect(x + 20, y + 9, 3, 3, [0, 0, 10, 255])
        Render.FilledRect(x + 24, y + 9, 3, 3, [0, 0, 10, 255])

        Render.FilledRect(x + 10, y + 13, 3, 3, [0, 0, 10, 255])
        Render.FilledRect(x + 14, y + 13, 11, 3, [0, 0, 10, 255])
        Render.FilledRect(x + 26, y + 13, 3, 3, [0, 0, 10, 255])

        for (i = 0; i < h.length; i++) {
            Render.StringCustom(x + 4, y + 25 + 20 * i, 0, h[i], [255, 255, 255, 255], fontpixel);
            Render.StringCustom(x + 176, y + 25 + 20 * i, 0, "on", [255, 255, 255, 255], fontpixel);
        }

        if (Global.IsKeyPressed(1)) {
            const mouse_pos = Global.GetCursorPosition();
            if (in_bounds(mouse_pos, x - 10, y - 10, x + 220, y + 50)) {
                if (UI.IsMenuOpen() == false)
                    return;
                UI.SetValue("Misc", "JAVASCRIPT", "Script items", "keybinds_x", mouse_pos[0] - 100);
                UI.SetValue("Misc", "JAVASCRIPT", "Script items", "keybinds_y", mouse_pos[1] - 5);
            }
        }
    }
}```

```Global.RegisterCallback("Draw", "keybinds");```

```//spactator list
UI.AddSliderInt("Specs_x", 0, Render.GetScreenSize()[0])
UI.AddSliderInt("Specs_y", 0, Render.GetScreenSize()[1])
UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Specs_x", false)
UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Specs_y", false)
UI.SetValue("Misc", "JAVASCRIPT", "Script items", "Specs_x", 250);
UI.SetValue("Misc", "JAVASCRIPT", "Script items", "Specs_y", 655);

function get_spectators() {
    var specs = [];
    const players = Entity.GetPlayers();
    for (i = 0; i < players.length; i++) {
        const cur = players[i];
        if (Entity.GetProp(cur, "CBasePlayer", "m_hObserverTarget") != "m_hObserverTarget") {
            const obs = Entity.GetProp(cur, "CBasePlayer", "m_hObserverTarget")

            if (obs === Entity.GetLocalPlayer()) {
                const name = Entity.GetName(cur);
                specs.push(name);
            }
        }
    }
    return specs;
}```

```function Spectatorss() {
    if (UI.GetValue("Script items", "Enable spectators list")) {
        const fontpixel = Render.AddFont("MuseoSansCyrl-500", 12, 100);
        const fontpixel1 = Render.AddFont("MuseoSansCyrl-500", 13, 100);
        var icons = Render.AddFont("raphaelicons", 19, 500)
        const names = get_spectators();
        const x1 = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Specs_x"),
            y1 = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Specs_y");

        //Light bottom
        Render.FilledRect(x1, y1, 200, 26, [0, 0, 10, 255]);
        Render.FilledRect(x1 + 1, y1 - 1, 198, 2, [0, 0, 10, 255]);
        Render.FilledRect(x1 + 2, y1 - 2, 196, 2, [0, 0, 10, 255]);
        //Dark Top rectangle
        Render.FilledRect(x1, y1, 200, 26, [0, 0, 10, 255]);
        Render.FilledRect(x1 + 1, y1 - 1, 198, 2, [0, 0, 10, 255]);
        Render.FilledRect(x1 + 2, y1 - 2, 196, 2, [0, 0, 10, 255]);
        //Logo
        Render.StringCustom(x1 + 5, y1, 0, "K", [34, 179, 246, 255], icons);
        //Spectators text
        Render.StringCustom(x1 + 30, y1 + 1, 0, "Spectators", [255, 255, 255, 255], fontpixel1);

        //Logo ENd

        //Render Active Keybind
        for (i = 0; i < names.length; i++) {
            Render.StringCustom(x1 + 5, y1 + 25 + 25 * i, 0, names[i], [255, 255, 255, 255], fontpixel);
        }

        //Move menu
        if (Global.IsKeyPressed(1)) {
            const mouse_pos = Global.GetCursorPosition();
            if (in_bounds(mouse_pos, x1, y1, x1 + 200, y1 + 26)) {
                if (UI.IsMenuOpen() == false)
                    return;
                UI.SetValue("Misc", "JAVASCRIPT", "Script items", "Specs_x", mouse_pos[0] - 100);
                UI.SetValue("Misc", "JAVASCRIPT", "Script items", "Specs_y", mouse_pos[1] - 15);
            }
        }
    }

}```

```Global.RegisterCallback("Draw", "Spectatorss");
```
//resolver
/*
```UI.AddCheckbox("Better resolver")
var onres = UI.GetValue("Script items", "Better resolver")
var isKeyActive = UI.IsHotkeyActive( "Rage", "GENERAL", "General", "Resolver override" );
function betterresik()
{
    if (onres = true)
    {
        if (offover = true)
        {
            UI.ToggleHotkey("Rage", "GENERAL", "General", "Resolver override")
        }
        else if (offover = false)
        {
            UI.ToggleHotkey("Rage", "GENERAL", "General", "Resolver override")
        }
    }
    else
    {

    }
}
```
Cheat.RegisterCallback("CreateMove", "betterresik");
*/

```///clantag
var lasttime = 0;

function clantag() {
    var tag = UI.GetValue("Script items", "Clantag");
    var time = parseInt((Globals.Curtime() * 5))
    if (time != lasttime) {
        if (tag == false) {
            Local.SetClanTag("");
        }
        if (tag == true) {
            switch ((time) % 53) {
                case 1: {
                    Local.SetClanTag("  ");
                    break;
                }
                case 2: {
                    Local.SetClanTag(" | ");
                    break;
                }
                case 3: {
                    Local.SetClanTag(" |\\ ");
                    break;
                }
                case 4: {
                    Local.SetClanTag(" |\\| ");
                    break;
                }
                case 5: {
                    Local.SetClanTag(" N ");
                    break;
                }
                case 6: {
                    Local.SetClanTag(" N3 ");
                    break;
                }
                case 7: {
                    Local.SetClanTag(" Ne ");
                    break;
                }
                case 8: {
                    Local.SetClanTag(" Ne\\ ");
                    break;
                }
                case 9: {
                    Local.SetClanTag(" Ne\\/ ");
                    break;
                }
                case 10: {
                    Local.SetClanTag(" Nev ");
                    break;
                }
                case 11: {
                    Local.SetClanTag(" Nev3 ");
                    break;
                }
                case 12: {
                    Local.SetClanTag(" Neve ");
                    break;
                }
                case 13: {
                    Local.SetClanTag(" Neve| ");
                    break;
                }
                case 14: {
                    Local.SetClanTag(" Neve|2 ");
                    break;
                }
                case 15: {
                    Local.SetClanTag(" Never|_ ");
                    break;
                }
                case 16: {
                    Local.SetClanTag(" Neverl ");
                    break;
                }
                case 17: {
                    Local.SetClanTag(" Neverl0 ");
                    break;
                }
                case 18: {
                    Local.SetClanTag(" Neverlo ");
                    break;
                }
                case 19: {
                    Local.SetClanTag(" Neverlo5 ");
                    break;
                }
                case 20: {
                    Local.SetClanTag(" Neverlos ");
                    break;
                }
                case 21: {
                    Local.SetClanTag(" Neverlos3 ");
                    break;
                }
                case 22: {
                    Local.SetClanTag(" Neverlose ");
                    break;
                }
                case 23: {
                    Local.SetClanTag(" Neverlose. ");
                    break;
                }
                case 24: {
                    Local.SetClanTag(" Neverlose.< ");
                    break;
                }
                case 25: {
                    Local.SetClanTag(" Neverlose.c< ");
                    break;
                }
                case 26: {
                    Local.SetClanTag(" Neverlose.cc ");
                    break;
                }
                case 27: {
                    Local.SetClanTag(" Neverlose.cc ");
                    break;
                }
                case 28: {
                    Local.SetClanTag(" Neverlose.c< ");
                    break;
                }
                case 29: {
                    Local.SetClanTag(" Neverlose.< ");
                    break;
                }
                case 30: {
                    Local.SetClanTag(" Neverlose. ");
                    break;
                }
                case 31: {
                    Local.SetClanTag(" Neverlose ");
                    break;
                }
                case 32: {
                    Local.SetClanTag(" Neverlos3 ");
                    break;
                }
                case 33: {
                    Local.SetClanTag(" Neverlos ");
                    break;
                }
                case 34: {
                    Local.SetClanTag(" Neverlo5 ");
                    break;
                }
                case 35: {
                    Local.SetClanTag(" Neverlo ");
                    break;
                }
                case 36: {
                    Local.SetClanTag(" Neverl0 ");
                    break;
                }
                case 37: {
                    Local.SetClanTag(" Neverl ");
                    break;
                }
                case 38: {
                    Local.SetClanTag(" Never|_ ");
                    break;
                }
                case 39: {
                    Local.SetClanTag(" Never|2 ");
                    break;
                }
                case 40: {
                    Local.SetClanTag(" Neve|2 ");
                    break;
                }
                case 41: {
                    Local.SetClanTag(" Neve| ");
                    break;
                }
                case 42: {
                    Local.SetClanTag(" Neve ");
                    break;
                }
                case 43: {
                    Local.SetClanTag(" Nev3 ");
                    break;
                }
                case 44: {
                    Local.SetClanTag(" Nev ");
                    break;
                }
                case 45: {
                    Local.SetClanTag(" Ne\\/ ");
                    break;
                }
                case 46: {
                    Local.SetClanTag(" Ne\\ ");
                    break;
                }
                case 47: {
                    Local.SetClanTag(" Ne ");
                    break;
                }
                case 48: {
                    Local.SetClanTag(" N3 ");
                    break;
                }
                case 49: {
                    Local.SetClanTag(" N ");
                    break;
                }
                case 50: {
                    Local.SetClanTag(" |\\| ");
                    break;
                }
                case 51: {
                    Local.SetClanTag(" |\\ ");
                    break;
                }
                case 52: {
                    Local.SetClanTag(" | ");
                    break;
                }
                case 53: {
                    Local.SetClanTag("  ");
                    break;
                }


            }
        }
    }
    lasttime = time;
}
Cheat.RegisterCallback("Draw", "clantag");
```
//set settings
```function setSsaa() {
    var aaon = UI.GetValue("Script items", "Enable antiaim")
    var aaat = UI.GetValue("Script items", "At targets")
    var aaad = UI.GetValue("Script items", "Freestand")

    UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Enabled", aaon)
    UI.SetValue("Anti-Aim", "Rage Anti-Aim", "At targets", aaat)
    UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Auto direction", aaad)
}
```Cheat.RegisterCallback("Draw", "setSsaa");```

//watermark

```Cheat.CursorInBox = function(x, y, length, height) {
    var cursor = Input.GetCursorPosition()
    if (cursor[0] > x && cursor[0] < x + length && cursor[1] > y && cursor[1] < y + height)
        return true
    return false
}```

```function settings(x, y, w, h, color, title) {
    var font = Render.AddFont("MuseoSansCyrl-500", 12, 500)
    var font3 = Render.AddFont("MuseoSansCyrl-900", 12, 500)
    var font2 = Render.AddFont("MuseoSansCyrl-900", 21, 500)
    ```
    ```Render.FilledRect(x, y - 1, w - 2, h, color)
    Render.FilledRect(x - 1, y, w, h - 2, color)
    ```
    ```Render.FilledRect(x - 1, y + 25, 300, 2, [16, 37, 61, 255], font)
    Render.FilledRect(x - 1, y + 95, 300, 2, [16, 37, 61, 255], font)
    Render.FilledRect(x - 1, y + 375, 300, 2, [16, 37, 61, 255], font)
    ```
    //version
    ```Render.StringCustom(x + 20, y + 125, 0, "Version:", [255, 255, 255, 255], font3)
    Render.StringCustom(x + 90, y + 125, 0, "1.0.0", [34, 179, 246, 255], font3)```

    //build date
   ``` Render.StringCustom(x + 20, y + 155, 0, "Build date:", [255, 255, 255, 255], font3)
    Render.StringCustom(x + 110, y + 155, 0, "09.01.2021", [34, 179, 246, 255], font3)```

    //build type
   ``` Render.StringCustom(x + 20, y + 185, 0, "Build type:", [255, 255, 255, 255], font3)
    Render.StringCustom(x + 110, y + 185, 0, "Beta", [34, 179, 246, 255], font3)```

    //build type
    ```Render.StringCustom(x + 20, y + 215, 0, "Created by:", [255, 255, 255, 255], font3)
    Render.StringCustom(x + 115, y + 215, 0, "Magma (magma#8327)", [34, 179, 246, 255], font3)```

    //subribtion
    ```Render.StringCustom(x + 20, y + 245, 0, "Subcription till:", [255, 255, 255, 255], font3)
    Render.StringCustom(x + 145, y + 245, 0, "Never", [34, 179, 246, 255], font3)```

    //neverlose copy
   ```Render.StringCustom(x + 76, y + 315, 0, "neverlose.cc © 2021", [255, 255, 255, 255], font)

    Render.StringCustom(x + 36, y + 3, 0, title, [255, 255, 255, 255], font)
    Render.StringCustom(x + 6, y + 3, 0, "NL", [34, 179, 246, 255], font3)
    Render.StringCustom(x + 7, y + 3, 0, "NL", [209, 217, 243, 255], font3)

    Render.StringCustom(x + 39, y + 44, 0, "NEVERLOSE.CC", [34, 179, 246, 255], font2)
    Render.StringCustom(x + 40, y + 45, 0, "NEVERLOSE.CC", [255, 255, 255, 255], font2)
}```

```function drawBoard(x, y, w, h, color, title) {
    var font = Render.AddFont("MuseoSansCyrl-900", 21, 500)
    var font2 = Render.AddFont("MuseoSansCyrl-500", 11, 500)
    var font3 = Render.AddFont("MuseoSansCyrl-900", 11, 500)
    var icon = Render.AddFont("raphaelicons", 19, 500)```

   Render.FilledRect(x, y - 1, 198, 630, [4, 12, 25, 230])
    Render.FilledRect(x + 198, y - 1, 650, 630, [9, 6, 13, 255])

    Render.FilledCircle(x + 30, y + 595, 20, [255, 255, 255, 255])

    Render.FilledRect(x, y + 560, 198, 2, [16, 37, 61, 200])
    Render.FilledRect(x + 198, y + 55, 650, 2, [16, 37, 61, 200])

    Render.StringCustom(x + 20, y + 54, 0, "Aimbot", [48, 58, 70, 255], font3)
    Render.StringCustom(x + 20, y + 174, 0, "Visual", [48, 58, 70, 255], font3)
    Render.StringCustom(x + 20, y + 353, 0, "Miscellaneous", [48, 58, 70, 255], font3)

    //icons
    Render.StringCustom(x + 11, y + 81, 0, "%", [34, 179, 246, 255], icon)
    Render.StringCustom(x + 11, y + 111, 0, "0", [34, 179, 246, 255], icon)
    Render.StringCustom(x + 11, y + 141, 0, ")", [34, 179, 246, 255], icon)
    Render.StringCustom(x + 11, y + 201, 0, "L", [34, 179, 246, 255], icon)
    Render.StringCustom(x + 11, y + 231, 0, "a", [34, 179, 246, 255], icon)
    Render.StringCustom(x + 11, y + 261, 0, "u", [34, 179, 246, 255], icon)
    Render.StringCustom(x + 11, y + 291, 0, "7", [34, 179, 246, 255], icon)
    Render.StringCustom(x + 11, y + 321, 0, "i", [34, 179, 246, 255], icon)
    Render.StringCustom(x + 11, y + 381, 0, "/", [34, 179, 246, 255], icon)
    Render.StringCustom(x + 11, y + 411, 0, "c", [34, 179, 246, 255], icon)
    Render.StringCustom(x + 11, y + 441, 0, ";", [34, 179, 246, 255], icon)
    Render.StringCustom(x + 11, y + 471, 0, "E", [34, 179, 246, 255], icon)

    //settings logo


    Render.StringCustom(x + 20, y + 14, 0, title, [34, 179, 246, 255], font)
    Render.StringCustom(x + 21, y + 15, 0, title, [255, 255, 255, 255], font)
    Render.StringCustom(x + 65, y + 577, 0, "Magma", [255, 255, 255, 255], font2) //name
    Render.StringCustom(x + 65, y + 598, 0, "Till: ", [45, 45, 45, 255], font2) //podpiska
    Render.StringCustom(x + 95, y + 598, 0, "never", [51, 136, 255, 255], font2) //time podpiska
}



X = function() {
    return UI.GetValue("Script items", "X")
}
Y = function() {
    return UI.GetValue("Script items", "Y")
}

function sliders() {
    UI.AddSliderInt("X", -630, Render.GetScreenSize()[0])
    UI.AddSliderInt("Y", -600, Render.GetScreenSize()[1])

    UI.SetEnabled("Script items", "X", false)
    UI.SetEnabled("Script items", "Y", false)
}
sliders()

var menumove = false;
var waitforup = false;
var offsetx = 0;
var offsety = 0;

function checkMovement() {
    var cursor = Input.GetCursorPosition()
    var onmenu = Cheat.CursorInBox(X(), Y(), 850, 630)
    if (UI.IsMenuOpen()) {
        if (Input.IsKeyPressed(0x01) && !waitforup && onmenu) {
            menumove = true
            offsetx = cursor[0] - X()
            offsety = cursor[1] - Y()
            waitforup = true
        }
        if (!Input.IsKeyPressed(0x01)) {
            menumove = false
            waitforup = false
        }
        if (menumove) {
            UI.SetValue("Script items", "X", cursor[0] - offsetx)
            UI.SetValue("Script items", "Y", cursor[1] - offsety)
        }
    }
}
Cheat.RegisterCallback("Draw", "checkMovement")


var idCheckbox = 0
var comboOverlapping = false
var comboactive = -1
var wasDown = []

function resetSpacing() {
    idCheckbox = 0
}
resetSpacing()

function checkbox(x, y, name, enable) {
    var font = Render.AddFont("MuseoSansCyrl-500", 12, 500)
    var color = [11, 17, 43, 255]
    var color1 = [74, 87, 97, 255]
    var xs = 0

    if (enable) {
        color = [3, 23, 46, 255]
        color1 = [3, 168, 245, 255]
        color2 = [255, 255, 255, 255]
        xs = 28
    } else {
        color = [11, 17, 43, 255]
        color1 = [74, 87, 97, 255]
        color2 = [210, 210, 210, 255]
        xs = 0
    }

    if (!comboOverlapping) {
        Render.FilledCircle(x + 236, y + 15, 7, color)
        Render.FilledCircle(x + 263, y + 15, 7, color)
        Render.FilledRect(x + 235, y + 8, 30, 15, color)

        Render.FilledCircle(x + 236 + xs, y + 15, 9, color1)

        Render.StringCustom(x, y + 5, 0, name, color2, font)
    }

    if (UI.IsMenuOpen() && !comboOverlapping) {
        if ((Cheat.CursorInBox(x + 232, y + 8, 42, 15)) && comboactive == -1) {
            if (!wasDown[idCheckbox]) {
                if (Input.IsKeyPressed(0x01)) {
                    wasDown[idCheckbox] = true
                    return true
                }
            } else if (wasDown[idCheckbox]) {
                if (!Input.IsKeyPressed(0x01)) {
                    wasDown[idCheckbox] = false
                    return false
                }
            }
            return false
        }
    }
}```

```function settings_checkbox(x, y, name, enable) {
    var color1 = [74, 87, 97, 255]

    if (enable) {
        color = [3, 23, 46, 255]
        color1 = [3, 168, 245, 255]

    } else {
        color = [11, 17, 43, 255]
        color1 = [74, 87, 97, 255]

    }

    if (!comboOverlapping) {
        Render.FilledCircle(x + 186, y + 15, 12, color1)
    }

    if (UI.IsMenuOpen() && !comboOverlapping) {
        if ((Cheat.CursorInBox(x + 173, y + 3, 24, 24)) && comboactive == -1) {
            if (!wasDown[idCheckbox]) {
                if (Input.IsKeyPressed(0x01)) {
                    wasDown[idCheckbox] = true
                    return true
                }
            } else if (wasDown[idCheckbox]) {
                if (!Input.IsKeyPressed(0x01)) {
                    wasDown[idCheckbox] = false
                    return false
                }
            }
            return false
        }
    }
}```


```function addTab(x, y, name, value) {
    var font = Render.AddFont("MuseoSansCyrl-500", 13, 500)
    var color1 = [74, 87, 97, 255]
    var enable = UI.GetValue("Script items", "Tabs")
    if (value == enable) {
        color1 = [255, 255, 255, 255]
        color2 = [5, 50, 75, 255]
    } else {
        color1 = [255, 255, 255, 255]
        color2 = [255, 255, 255, 0]
    }

    if (!comboOverlapping) {

        Render.FilledRect(x + 2, y, 180, 25, color2)
        Render.FilledRect(x, y - 2, 180, 25, color2)
        Render.FilledRect(x - 2, y, 180, 25, color2)
        Render.FilledRect(x, y + 2, 180, 25, color2)
        Render.StringCustom(x + 30, y + 2, 0, name, color1, font)
    }

    if (UI.IsMenuOpen() && !comboOverlapping) {
        if ((Cheat.CursorInBox(x, y, 180, 25)) && comboactive == -1) {
            if (!wasDown[idCheckbox]) {
                if (Input.IsKeyPressed(0x01)) {
                    wasDown[idCheckbox] = true
                    return true
                }
            } else if (wasDown[idCheckbox]) {
                if (!Input.IsKeyPressed(0x01)) {
                    wasDown[idCheckbox] = false
                    return false
                }
            }
            return false
        }
    }
}```

```function weaponGroup(x, y, name, value) {
    var font = Render.AddFont("MuseoSansCyrl-500", 13, 500)
    var color1 = [74, 87, 97, 255]
    var enableRAGE = UI.GetValue("Script items", "WeaponsRage")
    if (value == enableRAGE) {
        color1 = [255, 255, 255, 255]
        color2 = [5, 50, 75, 255]
    } else {
        color1 = [255, 255, 255, 255]
        color2 = [255, 255, 255, 0]
    }

    if (!comboOverlapping) {

        Render.FilledRect(x + 2, y, 75, 25, color2)
        Render.FilledRect(x, y - 2, 75, 25, color2)
        Render.FilledRect(x - 2, y, 75, 25, color2)
        Render.FilledRect(x, y + 2, 75, 25, color2)
        Render.StringCustom(x, y + 2, 0, name, color1, font)
    }

    if (UI.IsMenuOpen() && !comboOverlapping) {
        if ((Cheat.CursorInBox(x, y, 75, 25)) && comboactive == -1) {
            if (!wasDown[idCheckbox]) {
                if (Input.IsKeyPressed(0x01)) {
                    wasDown[idCheckbox] = true
                    return true
                }
            } else if (wasDown[idCheckbox]) {
                if (!Input.IsKeyPressed(0x01)) {
                    wasDown[idCheckbox] = false
                    return false
                }
            }
            return false
        }
    }
}```

```
/*
x - отступ с лева
y - отступ с верху
h - ширина
w - высота
*/
```function menubox(x, y, h, w, name) {
    var font = Render.AddFont("MuseoSansCyrl-500", 13, 500)
    var color1 = [255, 255, 255, 255]
    var color2 = [1, 11, 21, 255]
    var color3 = [7, 25, 37, 255]

    if (!comboOverlapping) {

        Render.FilledRect(x, y, h, w, color2)
        Render.FilledRect(x + 2, y + 30, h - 4, 2, color3)
        Render.StringCustom(x + 10, y + 5, 0, name, color1, font)
    }
}

```
//mainmenu

//chacks misc-aa
```UI.AddCheckbox("Enable binds list")
UI.AddCheckbox("Enable spectators list")
UI.AddCheckbox("Clantag")
UI.AddCheckbox("Rage")
UI.AddCheckbox("Enable antiaim")
UI.AddCheckbox("At targets")
UI.AddCheckbox("Freestand")
UI.AddCheckbox("AA on slowwalk")
//falsed misc- aa
UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Enable binds list", false);
UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Enable spectators list", false);
UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Clantag", false);
UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Rage", false);
UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Enable antiaim", false);
UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "At targets", false);
UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Freestand", false);
UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "AA on slowwalk", false);
```
//visuals

```UI.AddCheckbox("Local Bullet Tracer");
UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Local Bullet Tracer", false);
```
//tabs
```UI.AddDropdown("Tabs", ["Ragebot", "Antiaim", "Legitbot", "Players", "Weapon", "Grenades", "World", "View", "Main", "Inventory", "Scripts", "Config"])
UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Tabs", false);
```
//weapon group
//-rage
```UI.AddDropdown("WeaponsRage", ["GENERAL", "PISTOL", "HEAVY PISTOL", "SCOUT", "AWP", "AUTOSNIPER"])
```UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "WeaponsRage", false);

```
// rage
```UI.AddCheckbox("Enable rage")
UI.AddCheckbox("Override default for pistol")
UI.AddCheckbox("Override default for heavy")
UI.AddCheckbox("Override default for scout")
UI.AddCheckbox("Override default for awp")
UI.AddCheckbox("Override default for auto")
UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Enable rage", false);
UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Override default for pistol", false);
UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Override default for heavy", false);
UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Override default for scout", false);
UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Override default for awp", false);
UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Override default for auto", false);

UI.AddCheckbox("Settings")
UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Settings", false);
UI.AddCheckbox("Show ping")
UI.AddCheckbox("Show name")
UI.AddCheckbox("Show time")
UI.AddCheckbox("Show ip")
UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Show ping", false);
UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Show name", false);
UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Show time", false);
UI.SetEnabled("Misc", "JAVASCRIPT", "Script items", "Show ip", false);
```
/*
```UI.SetEnabled( "Legit", "GENERAL", "General", "Enabled", false );
UI.SetEnabled( "Legit", "GENERAL", "General", "Reaction time", false );
UI.SetEnabled( "Legit", "GENERAL", "Triggerbot", "Enabled", false );
UI.SetEnabled( "Legit", "GENERAL", "Triggerbot", "Magnet", false );
UI.SetEnabled( "Legit", "GENERAL", "Backtracking", "Enabled", false );
UI.SetEnabled( "Legit", "GENERAL", "Backtracking", "Maximum time", false );

UI.SetEnabled( "Legit", "GENERAL", "Default config", "Hitboxes", false );
UI.SetEnabled( "Legit", "GENERAL", "Default config", "Hitbox priority", false );
UI.SetEnabled( "Legit", "GENERAL", "Default config", "Fov", false );
UI.SetEnabled( "Legit", "GENERAL", "Default config", "Deadzone", false );
UI.SetEnabled( "Legit", "GENERAL", "Default config", "Speed (yaw)", false );
UI.SetEnabled( "Legit", "GENERAL", "Default config", "Speed (pitch)", false );
UI.SetEnabled( "Legit", "GENERAL", "Default config", "Recoil control", false );
UI.SetEnabled( "Legit", "GENERAL", "Default config", "Assist", false );
UI.SetEnabled( "Legit", "GENERAL", "Default config", "Triggerbot hitchance", false );

UI.SetEnabled( "Legit", "PISTOL", "General", "Override default", false );
UI.SetEnabled( "Legit", "RIFLE", "General", "Override default", false );
UI.SetEnabled( "Legit", "SNIPER", "General", "Override default", false );
UI.SetEnabled( "Legit", "SMG", "General", "Override default", false );
*/```


```UI.SetEnabled("Misc", "PERFOMANCE & INFORMATION", "Information", "Watermark", false);

UI.SetValue("Misc", "PERFOMANCE & INFORMATION", "Information", "Watermark", false);

function mainmenu() {

    var AddCheckbox = function(x, y, name) {
        if (checkbox(x, y, name, UI.GetValue("Script items", name))) UI.SetValue("Script items", name, !UI.GetValue("Script items", name))
    }
    var AddTab = function(x, y, name, value) {
        if (addTab(x, y, name, value)) UI.SetValue("Script items", "Tabs", value)
    }
    var AddGroup = function(x, y, name, value) {
        if (weaponGroup(x, y, name, value)) UI.SetValue("Script items", "WeaponsRage", value)
    }
    var AddBox = function(x, y, h, w, name) {
        if (menubox(x, y, h, w, name));
    }


    if (UI.IsMenuOpen()) {

        drawBoard(X(), Y(), 200, 630, [7, 9, 23, 255], "NEVERLOSE");

        AddTab(X() + 10, Y() + 80, "Ragebot", 0)
        AddTab(X() + 10, Y() + 110, "Antiaim", 1)
        AddTab(X() + 10, Y() + 140, "Legitbot", 2)
        AddTab(X() + 10, Y() + 200, "Players", 3)
        AddTab(X() + 10, Y() + 230, "Weapon", 4)
        AddTab(X() + 10, Y() + 260, "Grenades", 5)
        AddTab(X() + 10, Y() + 290, "World", 6)
        AddTab(X() + 10, Y() + 320, "View", 7)
        AddTab(X() + 10, Y() + 380, "Main", 8)
        AddTab(X() + 10, Y() + 410, "Inventory", 9)
        AddTab(X() + 10, Y() + 440, "Script", 10)
        AddTab(X() + 10, Y() + 470, "Config", 11)
        if (UI.GetValue("Script items", "Tabs") == 0) {
            AddGroup(X() + 210, Y() + 15, "GENERAL", 0)
            AddGroup(X() + 290, Y() + 15, " PISTOLS", 1)
            AddGroup(X() + 370, Y() + 15, "  HEAVY", 2)
            AddGroup(X() + 450, Y() + 15, "  SCOUT", 3)
            AddGroup(X() + 530, Y() + 15, "    AWP", 4)
            AddGroup(X() + 610, Y() + 15, "   AUTO", 5)
            if (UI.GetValue("Script items", "WeaponsRage") == 0) {
                AddBox(X() + 215, Y() + 65, 295, 280, "Main")
                AddCheckbox(X() + 225, Y() + 105, "Enable rage")

            }
            if (UI.GetValue("Script items", "WeaponsRage") == 1) {
                AddBox(X() + 215, Y() + 65, 295, 280, "Main")
                AddCheckbox(X() + 225, Y() + 105, "Override default for pistol")
            }
            if (UI.GetValue("Script items", "WeaponsRage") == 2) {
                AddBox(X() + 215, Y() + 65, 295, 280, "Main")
                AddCheckbox(X() + 225, Y() + 105, "Override default for heavy")
            }
            if (UI.GetValue("Script items", "WeaponsRage") == 3) {
                AddBox(X() + 215, Y() + 65, 295, 280, "Main")
                AddCheckbox(X() + 225, Y() + 105, "Override default for scout")
            }
            if (UI.GetValue("Script items", "WeaponsRage") == 4) {
                AddBox(X() + 215, Y() + 65, 295, 280, "Main")
                AddCheckbox(X() + 225, Y() + 105, "Override default for awp")
            }
            if (UI.GetValue("Script items", "WeaponsRage") == 5) {
                AddBox(X() + 215, Y() + 65, 295, 280, "Main")
                AddCheckbox(X() + 225, Y() + 105, "Override default for auto")
            }
        }
        if (UI.GetValue("Script items", "Tabs") == 1) {
            AddBox(X() + 215, Y() + 65, 295, 280, "Main")
            AddBox(X() + 530, Y() + 65, 295, 240, "Fake Angle")
            AddBox(X() + 215, Y() + 355, 295, 260, "Fake Lag")
            AddBox(X() + 530, Y() + 315, 295, 280, "Misc")
            AddCheckbox(X() + 225, Y() + 105, "Enable antiaim")
            AddCheckbox(X() + 225, Y() + 135, "At targets")
            AddCheckbox(X() + 225, Y() + 165, "Freestand")
            AddCheckbox(X() + 225, Y() + 195, "AA on slowwalk")
        }
        if (UI.GetValue("Script items", "Tabs") == 2) {

        }
        if (UI.GetValue("Script items", "Tabs") == 3) {

        }
        if (UI.GetValue("Script items", "Tabs") == 4) {

        }
        if (UI.GetValue("Script items", "Tabs") == 5) {

        }
        if (UI.GetValue("Script items", "Tabs") == 6) {

        }
        if (UI.GetValue("Script items", "Tabs") == 7) {
            AddBox(X() + 215, Y() + 65, 295, 280, "Main")
            AddCheckbox(X() + 225, Y() + 105, "Local Bullet Tracer")
        }
        if (UI.GetValue("Script items", "Tabs") == 8) {
            AddCheckbox(X() + 215, Y() + 65, "Clantag")
            AddCheckbox(X() + 215, Y() + 95, "Enable binds list")
            AddCheckbox(X() + 215, Y() + 125, "Enable spectators list")
        }
        if (UI.GetValue("Script items", "Tabs") == 9) {

        }
        if (UI.GetValue("Script items", "Tabs") == 10) {

        }
        if (UI.GetValue("Script items", "Tabs") == 11) {

        }
    }
}

Cheat.RegisterCallback("Draw", "mainmenu")

function settings_menu() {

    var AddCheckbox = function(x, y, name) {
        if (checkbox(x, y, name, UI.GetValue("Script items", name))) UI.SetValue("Script items", name, !UI.GetValue("Script items", name))
    }
    var Addsettings_checkbox = function(x, y, name) {
        if (settings_checkbox(x, y, name, UI.GetValue("Script items", name))) UI.SetValue("Script items", name, !UI.GetValue("Script items", name))
    }

    var username = Cheat.GetUsername()
    var today = new Date();
    var ping = Math.floor(Global.Latency() * 1000 / 1.5);
    var ip = World.GetServerString()
    var hours1 = today.getHours();
    var minutes1 = today.getMinutes();
    var seconds1 = today.getSeconds();
    var hours = hours1 <= 9 ? "0" + today.getHours() + ":" : today.getHours() + ":";
    var minutes = minutes1 <= 9 ? "0" + today.getMinutes() + ":" : today.getMinutes() + ":";
    var seconds = seconds1 <= 9 ? "0" + today.getSeconds() : today.getSeconds();

    var font = Render.AddFont("MuseoSansCyrl-900", 9, 900)
    var font1 = Render.AddFont("MuseoSansCyrl-900", 11, 900)

    var text = ""

    if (UI.GetValue("Script items", "Show name")) {
        text += ("| " + username)
    }
    if (UI.GetValue("Script items", "Show ping")) {
        text += (" | " + ping + " mc")
    }
    if (UI.GetValue("Script items", "Show time")) {
        text += (" | " + hours + minutes + seconds)
    }
    if (UI.GetValue("Script items", "Show ip")) {
        text += (" | " + ip)
    }

    var text1 = "NL"

    var h = 27;
    var w = Render.TextSizeCustom(text, font)[0] + 33;
    var x = Global.GetScreenSize()[0] - 2;
    var y = 12;
    x = x - w - 10;

    Render.FilledRect(x, y - 1, w - 2, h, [0, 20, 20, 255]);
    Render.FilledRect(x - 1, y, w, h - 2, [0, 20, 20, 255]);
    Render.StringCustom(x + 28, y + 5, 0, text, [255, 255, 255, 255], font)

    Render.StringCustom(x + 4, y + 3, 0, text1, [34, 179, 246, 255], font1)
    Render.StringCustom(x + 5, y + 4, 0, text1, [255, 255, 255, 255], font1)

    if (UI.IsMenuOpen()) {
        Addsettings_checkbox(X() + 605, Y() + 10, "Settings")
        if (UI.GetValue("Script Items", "Settings")) {
            settings(X() + 870, Y() + 50, 300, 530, [9, 6, 13, 225], "About Neverlose");

            AddCheckbox(X() + 885, Y() + 440, "Show ping")
            AddCheckbox(X() + 885, Y() + 470, "Show name")
            AddCheckbox(X() + 885, Y() + 500, "Show time")
            AddCheckbox(X() + 885, Y() + 530, "Show ip")
        }
    }
}
```
Cheat.RegisterCallback("Draw", "settings_menu")
```
```10:47:12.496 4dd7bd3.js:1 XHR loading: GET "https://api.gamesense.is/v1/licenses/".
(anonymous) @ 4dd7bd3.js:1
t.exports @ 4dd7bd3.js:1
t.exports @ 4dd7bd3.js:1
10:47:41.034 GET /vps/{gamesense.pub}/automatedBackup/restorePoints
10:47:41.078 VM108:1 Uncaught SyntaxError: Unexpected token '.'
10:48:02.298 GET "https://api.gamesense.is/v1/licenses/"
10:48:02.340 VM136:1 Uncaught SyntaxError: Unexpected string
10:48:08.903 fetch("GET "https://api.gamesense.is/v1/licenses/"")
10:48:08.916 VM176:1 Uncaught SyntaxError: missing ) after argument list
10:48:13.706 fetch("publickey-credentials-get")
10:48:13.721 Promise {<pending>}
10:48:14.047 VM198:1 GET https://gamesense.is/publickey-credentials-get (anonymous) @ VM198:1
10:49:48.876 Fetch  loading: GET "<URL>".
10:48:29.420 fetch("https://gamesense.pub/check?pc=8fb6e3d49e58aaf9f47da0022068aed6&pass=1625222861.348-u8b2jBZ&answer=174.8724489537", {
  "headers": {
    "    "sec-fetch-site": "same-origin",
    "upgrade-insecure-requests": "1"
  },
  "referrer": "https://gamesense.pub/forums/register.php?action=register",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "GET",
  "mode": "cors",
  "credentials": "include"
});
10:48:29.504 Promise {<pending>}
10:48:29.755 /profile:1 Access to fetch at 'https://gamesense.pub/check?pc=8fb6e3d49e58aaf9f47da0022068aed6&pass=1625222861.348-u8b2jBZ&answer=174.8724489537' from origin 'https://gamesense.is' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
10:48:29.756 VM231:1 GET https://gamesense.pub/check?pc=8fb6e3d49e58aaf9f47da0022068aed6&pass=1625222861.348-u8b2jBZ&answer=174.8724489537 net::ERR_FAILED
(anonymous) @ VM231:1
10:48:29.756 /profile:1 Uncaught (in promise) TypeError: Failed to fetch
10:48:49.612 fetch("D27CDB6E-AE6D-11cf-96B8-444553540000")
10:48:49.654 Promise {<pending>}
10:48:49.941 VM269:1 GET https://gamesense.is/D27CDB6E-AE6D-11cf-96B8-444553540000 404
(anonymous) @ VM269:1
10:49:13.111 fetch("thomasalwyndavis@gmail.com")
10:49:13.200 Promise {<pending>}
10:49:13.447 VM310:1 GET https://gamesense.is/thomasalwyndavis@gmail.com 404
(anonymous) @ VM310:1
10:49:22.762 fetch "https://dev-04nbtfx2.us.auth0.com/api/v2/"
10:49:22.775 VM336:1 Uncaught SyntaxError: Unexpected string
10:49:48.510 fetch("https://dev-04nbtfx2.us.auth0.com/api/v2/")
10:49:48.526 Promise {<pending>}
10:49:48.850 /profile:1 Access to fetch at 'https://dev-04nbtfx2.us.auth0.com/api/v2/' from originaccept":
```
![image](https://user-images.githubusercontent.com/65768277/182027993-0e03f461-ffef-4031-b91e-0a3cd7dcbd63.png)
![image](https://user-images.githubusercontent.com/65768277/182028008-9567be6e-a40e-4b21-9ed2-ca57a4a6aa22.png)
![image](https://user-images.githubusercontent.com/65768277/182028052-19a9808e-3587-4a8f-8b90-ea654bfb1fd2.png)



![image](https://user-images.githubusercontent.com/65768277/163142234-b7bc1323-6d2c-4d12-9804-1fe6db5487ef.png)

![image](https://user-images.githubusercontent.com/65768277/163142294-3fb923ff-fe5e-4f3a-93fb-61f56c0ed8f6.png)

![image](https://user-images.githubusercontent.com/65768277/163142335-9c0a208b-1b95-4888-a64f-9359500729f0.png)

![image](https://user-images.githubusercontent.com/65768277/163142469-c7fb046b-cc3d-4eee-88cd-59e36ceb611f.png)



https://codepen.io/h4xrox/pen/wvqNNWK
![image](https://user-images.githubusercontent.com/65768277/142678061-1d97f6b8-6cb7-42be-9050-99fd13b77c45.png)

https://discord.gg/fB5jnmNM8s
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```![image](https://user-images.githubusercontent.com/65768277/132969291-b189e662-714e-4e87-918f-2a34d2171a28.png)`
|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|/|\|\|\|\ [https://GameSense.software] |\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|/|\|\|\|\|\|\|\|/|\|\|\|\|\|\|\|/|\|\|\|\|\|\|\|
************************https://discord.gg/CbyWvAC38V
|×*+*+*+*+*+*+*+*+{H4XR0X#1337}:#***************************************************************************************************************************************************************************************************************************************************
|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|/|\|\|\|\|\|\|\|/|\|\|\|\|\|\|\|/|\|\|\|\|\|\|\||\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|/|\|\|\|\|\|\|\|/|\|\|\|\|\|\|\|/|\|\|\|\|\|\|\||\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|/|\|\|\|\|\|\|\|/|\|\|\|\|\|\|\|/|\|\|\|\|\|\|\||\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|/|\|\|\|\|\|\|\|/|\|\|\|\|\|\|\|/|\|\|\|\|\|\|\||\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|/|\|\|\|\|\|\|\|/|\|\|\|\|\|\|\|/|\|\|\|\|\|\|\|
**//+*h4xr0x.cc*+|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|/|\|\|\|\|\|\|\|/|\|\|\|\|\|\|\|/|\|\|\|\|\|\|\||\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|/|\|\|\|\|\|\|\|/|\|\|\|\|\|\|\|/|\|\|\|\|\|\|\|
// +----------------------------------+---------+------------------------+----------------+                              
// |The crack @es3n1n didnt make      |GameSense|    crackCRACkCr4Ck     | h4xr0x#1337    |
// +----------------------------------+---------+------------------------+----------------+
// |  Not crack! Its Onetap!          | 1       |  How I hacked them     |  FIXED FREE    |
// |      @NeverLose.cc               |  3      |  How he made it        |    h4xr0x      |
// |api.github.com/users/es3n1n/events|   3 7   |  How you can make it   |                |
// +----------------------------------+---------+------------------------+----------------+
// | 
// | ![image](https://user-images.githubusercontent.com/65768277/131275595-db3a8a20-f26e-4ea4-8e3f-f16126e4ac9b.png)
// |
// +--------------+--------------------+---------+------------------------+----------+                              
// |The crack @es3n1n didnt make  |GameSense|    crackCRACkCr4Ck     | h4xr0x#1337   |
// +-------------------------------+---------+------------------------+--------------×/+
// |  Not crack! Its Onetap        | 1       |  How I hacked them     |  FIXED FREE    |
// |      @NeverLose.cc              |  3 💔︁   |  How he made it        |    h4xr0x      |
// |api.github.com/users/es3n1n/events |   3 7   |  How you can make it   |  Community!    |
// +----------------------------------+------------+------------------------+----------------+								
// ![image](https://user-images.githubusercontent.com/65768277/131276207-485d6654-7409-480c-ade1-a3a004edb143.png) **https://discord.gg/9RxCPt7ja7**
----------------------------------------------------------------------------------------------------------------**search.h4xr0x.club**
    ![image](https://user-images.githubusercontent.com/65768277/131276082-3d0d2355-a2b5-40d8-a850-e2fbb50923bb.png) **h4xr0x.club | h4xr0x.cc**
![image](https://user-images.githubusercontent.com/65768277/131276148-09c4cafa-5ca8-4d7c-b185-80eca4df7b89.png)  

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- Behind the scam: **Alexander Vitomin**, **Ivan Derzhavin**, **Alexey Rusanov**, **Nikita Sotnikov**, **Dmitry Katsiman** and **Vladimir Orlov** -- Selling your information; preying on children -- these russians aren't just scamming americans out out of 35$; they are data minning and selling your information. That exit scam that was GameSense.is also is an ungoing data mine on your identitys, privacy and predators after your children. If you find yourself a victim of this; You at least got their names, and I got all of their information. GameSense.is was just using azures 200$ promotion; scamming microsoft with a fake account.... Remember, im h4xr0x, I am, just 1 american hacking a russian team and exposing them - Thats karma, thats Red Hat's eating black hats for breakfast. -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
```<title>NeverLose.cc</title>```

```(function() {
var alertCont;
function trackOldBrowserEvent(event) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', '/badbrowser_stat.php?act=track&event=' + event);
  xhr.send();
}
function exposeGlobals() {
  window.hideOldBrowser = function() {
    alertCont.remove();
    var date = new Date();
    date.setTime(date.getTime() + (7 * 24 * 60 * 60 * 1000));
    var expiresDate = date.toGMTString();
    var domain = window.locDomain;
    document.cookie = 'remixoldbshown=1; expires=' + expiresDate + '; path=/' + (domain ? '; domain=.' + domain : '') + ';secure';
    trackOldBrowserEvent('hideAlert_atom');
  }```
```apiConfigDomains: {
    domain: 'vk.com',
    apiDomain: 'api.vk.com',
    loginDomain: 'login.vk.com',
    connectDomain: 'connect.vk.com',
  },```

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  ```isCallsDevEnv: '' ? true : false,
};;vk.rv="108293";;if (!window.constants) { window.constants = {Groups: {
  GROUPS_ADMIN_LEVEL_USER: 0,
  GROUPS_ADMIN_LEVEL_MODERATOR: 1,
  GROUPS_ADMIN_LEVEL_EDITOR: 2,
  GROUPS_ADMIN_LEVEL_ADMINISTRATOR: 3,
  GROUPS_ADMIN_LEVEL_HOST: 4,
  GROUPS_ADMIN_LEVEL_EVENT_CREATOR: 5,
  GROUPS_ADMIN_LEVEL_CREATOR: 6,
  GROUPS_ADMIN_PSEUDO_LEVEL_ADVERTISER: 100
}}; };```

```window.locDomain = vk.host.match(/[a-zA-Z]+\.[a-zA-Z]+\.?$/)[0];
var _ua = navigator.userAgent.toLowerCase();
if (/opera/i.test(_ua) || !/msie 6/i.test(_ua) || document.domain != locDomain) document.domain = locDomain;
var ___htest = (location.toString().match(/#(.*)/) || {})[1] || '', ___to;
___htest = ___htest.split('#').pop();
if (vk.al != 1 && ___htest.length && ___htest.substr(0, 1) == vk.navPrefix) {
  if (vk.al != 3 || vk.navPrefix != '!') {
    ___to = ___htest.replace(/^(\/|!)/, '');
    if (___to.match(/^([^\?]*\.php|login|mobile|away)([^a-z0-9\.]|$)/)) ___to = '';
    location.replace(location.protocol + '//' + location.host + '/' + ___to);
  }
}```
</a>
    <div class="module_body clear_fix">
      <div class="people_row">
<div class="people_cell">
  <a class="people_cell_ava" href="/avitomin" onclick="return nav.go(this, event, {cl_id: 0})" title="Alexander Vitomin">
    <img class="people_cell_img" src="https://sun6-21.userapi.com/s/v1/if1/AbNyvfLnhv_afHglZLSNdF8uUJj4gZXRQJGg6Pt6xokK8ojuijes9WRwyOWvjK8Fal_Wdx7X.jpg?size=50x50&quality=96&crop=0,218,989,989&ava=1" alt="Alexander Vitomin" />
    <span class="blind_label">.</span>
  </a>
  <div class="people_cell_name">
    <a href="/avitomin" title="Alexander Vitomin">
      Alexander
    </a>
  </div>
</div><div class="people_cell">
  <a class="people_cell_ava" href=" ```/bankcreator"``` onclick="return nav.go(this, event, {cl_id: 0})" ```title="Ivan Derzhavin">```
    <img class="people_cell_img" src="https://sun6-21.userapi.com/s/v1/ig2/c6SuQ0HzjanbIFNs7wNla3LOPrvU573ChfJRM3IEQv4XvzvLrSHHusQlNIGk7s90FF5ZFmDm7gJf1zbArhYluS9Z.jpg?size=50x50&quality=96&crop=0,64,1856,1856&ava=1" alt="Ivan Derzhavin" />
    <span class="blind_label">.</span>
  </a>
  <div class="people_cell_name">
    <a href=" **/bankcreator**" title=" ```Ivan Derzhavin">```
      Ivan
    </a>
  </div>
</div><div class="people_cell">
  <a class="people_cell_ava" href="/nd1337" onclick="return nav.go(this, event, {cl_id: 0})" title=" ```Alexey Rusanov">```
    <img class="people_cell_img" src="https://sun6-21.userapi.com/s/v1/ig2/eMjvrctl7qlqz7WKkR8DVNzM2A6xxVeT574bQ3ZJLGUK_k2aPH15lqeIcz2f6VTvbCJ_4RwrZX7l0PYtcb0Y36v9.jpg?size=50x50&quality=96&crop=746,0,1236,1236&ava=1" alt="Alexey Rusanov" />
    <span class="blind_label">.</span>
  </a>
  <div class="people_cell_name">
    <a href="/nd1337" ```title="Alexey Rusanov">```
      Alexey
    </a>
  </div>
</div>
</div><div class="people_row">
<div class="people_cell">
  <a class="people_cell_ava" href=" ```/nadushaalove"``` onclick="return nav.go(this, event, {cl_id: 0})" ```title="Nikita Sotnikov">```
    <img class="people_cell_img" src="https://sun6-20.userapi.com/s/v1/ig2/cfP7lv0fikj_DVAyr9-9odVVqevlP3RFpQwtOiT4FfxxXfsmqffh_vSyPQmGWhxG9Qqd2F9EDACkwgWKI89H1WkM.jpg?size=50x50&quality=96&crop=0,261,677,677&ava=1" alt="Nikita Sotnikov" />
    <span class="blind_label">.</span>
  </a>
  <div class="people_cell_name">
    <a href="/nadushaalove" ```title="Nikita Sotnikov">```
      Nikita
    </a>
  </div>
</div><div class="people_cell">
  <a class="people_cell_ava" href="/id5630122" onclick="return nav.go(this, event, {cl_id: 0})" ```title="Dmitry Katsiman">```
    <img class="people_cell_img" src="https://sun6-22.userapi.com/s/v1/ig1/J83nqrP5_HId7rFM1kGVtvdvre-1cS5mu2UQw0voQOdSRuGS5gM9ZewOCWEp5sKxIz4iM3Af.jpg?size=50x50&quality=96&crop=1,170,1617,1617&ava=1"  ```alt="Dmitry Katsiman"``` />
    <span class="blind_label">.</span>
  </a>
  <div class="people_cell_name">
    <a href="/id5630122" ```title="Dmitry Katsiman">```
      Dmitry
    </a>
  </div>
</div><div class="people_cell">
  <a class="people_cell_ava" href="/v.orlov84" onclick="return nav.go(this, event, {cl_id: 0})" ```title="Vladimir Orlov">```
    <img class="people_cell_img" src="https://sun6-22.userapi.com/s/v1/if2/dUWFtmRj2vMVcZg7rrbMeEsADMAkuxCkMjqTsExTR4rJEfQe-3YmLOYVSApIp5ygfXnrcmUPzcJ0iuZp9yrBD3ZD.jpg?size=50x50&quality=96&crop=115,21,423,423&ava=1" alt="Vladimir Orlov" />
    <span class="blind_label">.</span>
  </a>
  <div class="people_cell_name">
    <a href="/v.orlov84" ```title="Vladimir Orlov">```
      ```Vladimir```
    </a>
  </div>
</div>
</div>
    </div>
/|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|/|\|\|\|\|\|\|\|/|\|\|\|\|\|\|\|/|\|\|\|\|\|\|\||\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|/|\|\|\|\|\|\|\|/|\|\|\|\|\|\|\|/|\|\|\|\|\|\|\|/
|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|/|\|\|\|\|\|\|\|/|\|\|\|\|\|\|\|/|\|\|\|\|\|\|\||\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|/|\|\|\|\|\|\|\|/|\|\|\|\|\|\|\|/|\|\|\|\|\|\|\|
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------![image](https://user-images.githubusercontent.com/65768277/134754581-7e84d9a6-7b73-4797-bf2b-af17c6b68fcb.png)
**240+ gamesense.is and gamesense.pub users** these users come from this pdf file:---------------------------------------------------------------------------------------------------------------------------------------------------------------------``![image](https://user-images.githubusercontent.com/65768277/136642370-9ffa6f54-2278-4448-b87a-5d4db301b976.png)``
---------------------------------------------------------------------------------------------------------------------------------------------------------------------
This PDF ```271374766.pdf``` is XMP Metadata
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------Crack Crack Crack Cracked of crack and hack. GameSense.is  https://discord.gg/4Q8SsBSRpJ
[gamesense.crack.crack.zip](https://github.com/h4xrOx/GameSense.is.crack.CR4cKCRACK/files/6832838/gamesense.crack.crack.zip)
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

``271374766.pdf`` file is XMP Metadata; A metadata stream can be associated with a document, or a component of a document. Consequently, a document may contain multiple metadata streams—multiple XMP packets. 
![image](https://user-images.githubusercontent.com/65768277/136643340-064d81d5-529b-4a37-b117-398a65d420ec.png)
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Below is a raw sample of that metadata stream from gamesense.is, but also gamesense.pub

heres monitoring api calls on gamesense.pub with react developer tools and redux:
![image](https://user-images.githubusercontent.com/65768277/136643616-dd4d277b-646d-4984-96aa-6c4881967399.png)

metadata stream from gamesense.is:
![image](https://user-images.githubusercontent.com/65768277/136643506-edbc7ea2-b147-4870-9eb7-3abe942994be.png)

heres raw metadata of the emails and passwords:

```<</Type/Metadata
/Subtype/XML/Length 1369>>stream
<?xpacket begin='﻿' id='W5M0MpCehiHzreSzNTczkc9d'?>
<?adobe-xap-filters esc="CRLF"?>
<x:xmpmeta xmlns:x='adobe:ns:meta/' x:xmptk='XMP toolkit 2.9.1-13, framework 1.6'>
<rdf:RDF xmlns:rdf='http://www.w3.org/1999/02/22-rdf-syntax-ns#' xmlns:iX='http://ns.adobe.com/iX/1.0/'>
<rdf:Description rdf:about='uuid:cc4ff28a-60fa-11f0-0000-2344d08e0a8a' xmlns:pdf='http://ns.adobe.com/pdf/1.3/' pdf:Producer='GPL Ghostscript 9.10'/>
<rdf:Description rdf:about='uuid:cc4ff28a-60fa-11f0-0000-2344d08e0a8a' xmlns:xmp='http://ns.adobe.com/xap/1.0/'><xmp:ModifyDate>2015-07-12T21:37:52Z</xmp:ModifyDate>
<xmp:CreateDate>2015-07-12T21:37:52Z</xmp:CreateDate>
<xmp:CreatorTool>u2ps</xmp:CreatorTool></rdf:Description>
<rdf:Description rdf:about='uuid:cc4ff28a-60fa-11f0-0000-2344d08e0a8a' xmlns:xapMM='http://ns.adobe.com/xap/1.0/mm/' xapMM:DocumentID='uuid:cc4ff28a-60fa-11f0-0000-2344d08e0a8a'/>
<rdf:Description rdf:about='uuid:cc4ff28a-60fa-11f0-0000-2344d08e0a8a' xmlns:dc='http://purl.org/dc/elements/1.1/' dc:format='application/pdf'><dc:title><rdf:Alt><rdf:li xml:lang='x-default'>/var/www/apps/conversion/tmp/scratch_7/276302401.txt.utf8</rdf:li></rdf:Alt></dc:title></rdf:Description>
</rdf:RDF>
</x:xmpmeta>
                                                                        
                                                                        
<?xpacket end='w'?>
endstream
endobj
2 0 obj
<</Producer(GPL Ghostscript 9.10)
/CreationDate(D:20150712213752Z00'00')
/ModDate(D:20150712213752Z00'00')
/Title(/var/www/apps/conversion/tmp/scratch_7/276302401.txt.utf8)
/Creator(u2ps)>>endobj
xref
0 1225
0000000000 65535 f 
0000326517 00000 n 
0000349447 00000 n 
0000324494 00000 n 
0000284054 00000 n 
0000000015 00000 n 
0000000789 00000 n 
0000326584 00000 n 
0000342010 00000 n 
0000342449 00000 n 
0000326625 00000 n 
0000326655 00000 n 
0000284214 00000 n 
0000000808 00000 n 
0000001873 00000 n 
0000326685 00000 n 
0000326715 00000 n 
0000284376 00000 n 
0000001893 00000 n 
0000002946 00000 n 
0000326745 00000 n 
0000326775 00000 n 
0000284538 00000 n 
0000002966 00000 n 
0000004051 00000 n 
0000326805 00000 n 
0000326835 00000 n 
0000284700 00000 n 
0000004072 00000 n 
0000005158 00000 n 
0000326865 00000 n 
0000326895 00000 n 
0000284862 00000 n 
0000005179 00000 n 
0000006315 00000 n 
0000326925 00000 n 
0000326955 00000 n 
0000285024 00000 n 
0000006336 00000 n 
0000007456 00000 n 
0000326985 00000 n 
0000327015 00000 n 
0000285186 00000 n 
0000007477 00000 n 
0000008556 00000 n 
0000327045 00000 n 
0000327075 00000 n 
0000285348 00000 n 
0000008577 00000 n 
0000009683 00000 n 
0000327105 00000 n 
0000327135 00000 n 
0000285510 00000 n 
0000009704 00000 n 
0000010789 00000 n 
0000327165 00000 n 
0000327195 00000 n 
0000285672 00000 n 
0000010810 00000 n 
0000011939 00000 n 
0000327225 00000 n 
0000327255 00000 n 
0000285834 00000 n 
0000011960 00000 n 
0000013114 00000 n 
0000327285 00000 n 
0000327315 00000 n 
0000285996 00000 n 
0000013135 00000 n 
0000014317 00000 n 
0000327345 00000 n 
0000327375 00000 n 
0000286158 00000 n 
0000014338 00000 n 
0000015516 00000 n 
0000327405 00000 n 
0000327435 00000 n 
0000286320 00000 n 
0000015537 00000 n 
0000016739 00000 n 
0000327465 00000 n 
0000327495 00000 n 
0000286482 00000 n 
0000016760 00000 n 
0000017953 00000 n 
0000327525 00000 n 
0000327555 00000 n 
0000286644 00000 n 
0000017974 00000 n 
0000019118 00000 n 
0000327585 00000 n 
0000327615 00000 n 
0000286806 00000 n 
0000019139 00000 n 
0000020232 00000 n 
0000327645 00000 n 
0000327675 00000 n 
0000286968 00000 n 
0000020253 00000 n 
0000021345 00000 n 
0000327705 00000 n 
0000327736 00000 n 
0000287132 00000 n 
0000021366 00000 n 
0000022441 00000 n 
0000327767 00000 n 
0000327798 00000 n 
0000287298 00000 n 
0000022463 00000 n 
0000023555 00000 n 
0000327829 00000 n 
0000327860 00000 n 
0000287464 00000 n 
0000023577 00000 n 
0000024639 00000 n 
0000327891 00000 n 
0000327922 00000 n 
0000287630 00000 n 
0000024660 00000 n 
0000025763 00000 n 
0000327953 00000 n 
0000327984 00000 n 
0000287796 00000 n 
0000025785 00000 n 
0000026864 00000 n 
0000328015 00000 n 
0000328046 00000 n 
0000287962 00000 n 
0000026886 00000 n 
0000027952 00000 n 
0000328077 00000 n 
0000328108 00000 n 
0000288128 00000 n 
0000027973 00000 n 
0000029101 00000 n 
0000328139 00000 n 
0000328170 00000 n 
0000288294 00000 n 
0000029123 00000 n 
0000030303 00000 n 
0000328201 00000 n 
0000328232 00000 n 
0000288460 00000 n 
0000030325 00000 n 
0000031486 00000 n 
0000328263 00000 n 
0000328294 00000 n 
0000288626 00000 n 
0000031508 00000 n 
0000032669 00000 n 
0000328325 00000 n 
0000328356 00000 n 
0000288792 00000 n 
0000032691 00000 n 
0000033895 00000 n 
0000328387 00000 n 
0000328418 00000 n 
0000288958 00000 n 
0000033917 00000 n 
0000035083 00000 n 
0000328449 00000 n 
0000328480 00000 n 
0000289124 00000 n 
0000035105 00000 n 
0000036244 00000 n 
0000328511 00000 n 
0000328542 00000 n 
0000289290 00000 n 
0000036266 00000 n 
0000037344 00000 n 
0000328573 00000 n 
0000328604 00000 n 
0000289456 00000 n 
0000037366 00000 n 
0000038452 00000 n 
0000328635 00000 n 
0000328666 00000 n 
0000289622 00000 n 
0000038474 00000 n 
0000039555 00000 n 
0000328697 00000 n 
0000328728 00000 n 
0000289788 00000 n 
0000039577 00000 n 
0000040624 00000 n 
0000328759 00000 n 
0000328790 00000 n 
0000289954 00000 n 
0000040645 00000 n 
0000041730 00000 n 
0000328821 00000 n 
0000328852 00000 n 
0000290120 00000 n 
0000041752 00000 n 
0000042833 00000 n 
0000328883 00000 n 
0000328914 00000 n 
0000290286 00000 n 
0000042855 00000 n 
0000043963 00000 n 
0000328945 00000 n 
0000328976 00000 n 
0000290452 00000 n 
0000043985 00000 n 
0000045074 00000 n 
0000329007 00000 n 
0000329038 00000 n 
0000290618 00000 n 
0000045096 00000 n 
0000046188 00000 n 
0000329069 00000 n 
0000329100 00000 n 
0000290784 00000 n 
0000046210 00000 n 
0000047272 00000 n 
0000329131 00000 n 
0000329162 00000 n 
0000290950 00000 n 
0000047293 00000 n 
0000048434 00000 n 
0000329193 00000 n 
0000329224 00000 n 
0000291116 00000 n 
0000048456 00000 n 
0000049666 00000 n 
0000329255 00000 n 
0000329286 00000 n 
0000291282 00000 n 
0000049688 00000 n 
0000050855 00000 n 
0000329317 00000 n 
0000329348 00000 n 
0000291448 00000 n 
0000050877 00000 n 
0000052050 00000 n 
0000329379 00000 n 
0000329410 00000 n 
0000291614 00000 n 
0000052072 00000 n 
0000053245 00000 n 
0000329441 00000 n 
0000329472 00000 n 
0000291780 00000 n 
0000053267 00000 n 
0000054472 00000 n 
0000329503 00000 n 
0000329534 00000 n 
0000291946 00000 n 
0000054494 00000 n 
0000055656 00000 n 
0000329565 00000 n 
0000329596 00000 n 
0000292112 00000 n 
0000055678 00000 n 
0000056768 00000 n 
0000329627 00000 n 
0000329658 00000 n 
0000292278 00000 n 
0000056790 00000 n 
0000057862 00000 n 
0000329689 00000 n 
0000329720 00000 n 
0000292444 00000 n 
0000057883 00000 n 
0000058933 00000 n 
0000329751 00000 n 
0000329782 00000 n 
0000292610 00000 n 
0000058954 00000 n 
0000060012 00000 n 
0000329813 00000 n 
0000329844 00000 n 
0000292776 00000 n 
0000060033 00000 n 
0000061160 00000 n 
0000329875 00000 n 
0000329906 00000 n 
0000292942 00000 n 
0000061182 00000 n 
0000062328 00000 n 
0000329937 00000 n 
0000329968 00000 n 
0000293108 00000 n 
0000062350 00000 n 
0000063483 00000 n 
0000329999 00000 n 
0000330030 00000 n 
0000293274 00000 n 
0000063505 00000 n 
0000064597 00000 n 
0000330061 00000 n 
0000330092 00000 n 
0000293440 00000 n 
0000064619 00000 n 
0000065694 00000 n 
0000330123 00000 n 
0000330154 00000 n 
0000293606 00000 n 
0000065716 00000 n 
0000066808 00000 n 
0000330185 00000 n 
0000330216 00000 n 
0000293772 00000 n 
0000066830 00000 n 
0000067998 00000 n 
0000330247 00000 n 
0000330278 00000 n 
0000293938 00000 n 
0000068020 00000 n 
0000069241 00000 n 
0000330309 00000 n 
0000330340 00000 n 
0000294104 00000 n 
0000069263 00000 n 
0000070408 00000 n 
0000330371 00000 n 
0000330402 00000 n 
0000294270 00000 n 
0000070430 00000 n 
0000071658 00000 n 
0000330433 00000 n 
0000330464 00000 n 
0000294436 00000 n 
0000071680 00000 n 
0000072813 00000 n 
0000330495 00000 n 
0000330526 00000 n 
0000294602 00000 n 
0000072835 00000 n 
0000073968 00000 n 
0000330557 00000 n 
0000330588 00000 n 
0000294768 00000 n 
0000073990 00000 n 
0000075084 00000 n 
0000330619 00000 n 
0000330650 00000 n 
0000294934 00000 n 
0000075106 00000 n 
0000076201 00000 n 
0000330681 00000 n 
0000330712 00000 n 
0000295100 00000 n 
0000076223 00000 n 
0000077335 00000 n 
0000330743 00000 n 
0000330774 00000 n 
0000295266 00000 n 
0000077357 00000 n 
0000078433 00000 n 
0000330805 00000 n 
0000330836 00000 n 
0000295432 00000 n 
0000078455 00000 n 
0000079500 00000 n 
0000330867 00000 n 
0000330898 00000 n 
0000295598 00000 n 
0000079521 00000 n 
0000080592 00000 n 
0000330929 00000 n 
0000330960 00000 n 
0000295764 00000 n 
0000080613 00000 n 
0000081732 00000 n 
0000330991 00000 n 
0000331022 00000 n 
0000295930 00000 n 
0000081754 00000 n 
0000082839 00000 n 
0000331053 00000 n 
0000331084 00000 n 
0000296096 00000 n 
0000082861 00000 n 
0000083952 00000 n 
0000331115 00000 n 
0000331146 00000 n 
0000296262 00000 n 
0000083974 00000 n 
0000085092 00000 n 
0000331177 00000 n 
0000331208 00000 n 
0000296428 00000 n 
0000085114 00000 n 
0000086209 00000 n 
0000331239 00000 n 
0000331270 00000 n 
0000296594 00000 n 
0000086231 00000 n 
0000087368 00000 n 
0000331301 00000 n 
0000331332 00000 n 
0000296760 00000 n 
0000087390 00000 n 
0000088548 00000 n 
0000331363 00000 n 
0000331394 00000 n 
0000296926 00000 n 
0000088570 00000 n 
0000089717 00000 n 
0000331425 00000 n 
0000331456 00000 n 
0000297092 00000 n 
0000089739 00000 n 
0000090902 00000 n 
0000331487 00000 n 
0000331518 00000 n 
0000297258 00000 n 
0000090924 00000 n 
0000092090 00000 n 
0000331549 00000 n 
0000331580 00000 n 
0000297424 00000 n 
0000092112 00000 n 
0000093306 00000 n 
0000331611 00000 n 
0000331642 00000 n 
0000297590 00000 n 
0000093328 00000 n 
0000094448 00000 n 
0000331673 00000 n 
0000331704 00000 n 
0000297756 00000 n 
0000094470 00000 n 
0000095594 00000 n 
0000331735 00000 n 
0000331766 00000 n 
0000297922 00000 n 
0000095616 00000 n 
0000096681 00000 n 
0000331797 00000 n 
0000331828 00000 n 
0000298088 00000 n 
0000096702 00000 n 
0000097785 00000 n 
0000331859 00000 n 
0000331890 00000 n 
0000298254 00000 n 
0000097807 00000 n 
0000098839 00000 n 
0000331921 00000 n 
0000331952 00000 n 
0000298420 00000 n 
0000098860 00000 n 
0000099938 00000 n 
0000331983 00000 n 
0000332014 00000 n 
0000298586 00000 n 
0000099960 00000 n 
0000101096 00000 n 
0000332045 00000 n 
0000332076 00000 n 
0000298752 00000 n 
0000101118 00000 n 
0000102225 00000 n 
0000332107 00000 n 
0000332138 00000 n 
0000298918 00000 n 
0000102247 00000 n 
0000103332 00000 n 
0000332169 00000 n 
0000332200 00000 n 
0000299084 00000 n 
0000103354 00000 n 
0000104426 00000 n 
0000332231 00000 n 
0000332262 00000 n 
0000299250 00000 n 
0000104447 00000 n 
0000105562 00000 n 
0000332293 00000 n 
0000332324 00000 n 
0000299416 00000 n 
0000105584 00000 n 
0000106755 00000 n 
0000332355 00000 n 
0000332386 00000 n 
0000299582 00000 n 
0000106777 00000 n 
0000107979 00000 n 
0000332417 00000 n 
0000332448 00000 n 
0000299748 00000 n 
0000108001 00000 n 
0000109194 00000 n 
0000332479 00000 n 
0000332510 00000 n 
0000299914 00000 n 
0000109216 00000 n 
0000110360 00000 n 
0000332541 00000 n 
0000332572 00000 n 
0000300080 00000 n 
0000110382 00000 n 
0000111572 00000 n 
0000332603 00000 n 
0000332634 00000 n 
0000300246 00000 n 
0000111594 00000 n 
0000112703 00000 n 
0000332665 00000 n 
0000332696 00000 n 
0000300412 00000 n 
0000112725 00000 n 
0000113807 00000 n 
0000332727 00000 n 
0000332758 00000 n 
0000300578 00000 n 
0000113829 00000 n 
0000114901 00000 n 
0000332789 00000 n 
0000332820 00000 n 
0000300744 00000 n 
0000114922 00000 n 
0000115964 00000 n 
0000332851 00000 n 
0000332882 00000 n 
0000300910 00000 n 
0000115985 00000 n 
0000117053 00000 n 
0000332913 00000 n 
0000332944 00000 n 
0000301076 00000 n 
0000117074 00000 n 
0000118154 00000 n 
0000332975 00000 n 
0000333006 00000 n 
0000301242 00000 n 
0000118176 00000 n 
0000119317 00000 n 
0000333037 00000 n 
0000333068 00000 n 
0000301408 00000 n 
0000119339 00000 n 
0000120476 00000 n 
0000333099 00000 n 
0000333130 00000 n 
0000301574 00000 n 
0000120498 00000 n 
0000121638 00000 n 
0000333161 00000 n 
0000333192 00000 n 
0000301740 00000 n 
0000121660 00000 n 
0000122747 00000 n 
0000333223 00000 n 
0000333254 00000 n 
0000301906 00000 n 
0000122769 00000 n 
0000123849 00000 n 
0000333285 00000 n 
0000333316 00000 n 
0000302072 00000 n 
0000123871 00000 n 
0000124991 00000 n 
0000333347 00000 n 
0000333378 00000 n 
0000302238 00000 n 
0000125013 00000 n 
0000126134 00000 n 
0000333409 00000 n 
0000333440 00000 n 
0000302404 00000 n 
0000126156 00000 n 
0000127261 00000 n 
0000333471 00000 n 
0000333502 00000 n 
0000302570 00000 n 
0000127283 00000 n 
0000128434 00000 n 
0000333533 00000 n 
0000333564 00000 n 
0000302736 00000 n 
0000128456 00000 n 
0000129552 00000 n 
0000333595 00000 n 
0000333626 00000 n 
0000302902 00000 n 
0000129574 00000 n 
0000130660 00000 n 
0000333657 00000 n 
0000333688 00000 n 
0000303068 00000 n 
0000130682 00000 n 
0000131780 00000 n 
0000333719 00000 n 
0000333750 00000 n 
0000303234 00000 n 
0000131802 00000 n 
0000132876 00000 n 
0000333781 00000 n 
0000333812 00000 n 
0000303400 00000 n 
0000132898 00000 n 
0000133947 00000 n 
0000333843 00000 n 
0000333874 00000 n 
0000303566 00000 n 
0000133968 00000 n 
0000135050 00000 n 
0000333905 00000 n 
0000333936 00000 n 
0000303732 00000 n 
0000135072 00000 n 
0000136266 00000 n 
0000333967 00000 n 
0000333998 00000 n 
0000303898 00000 n 
0000136288 00000 n 
0000137516 00000 n 
0000334029 00000 n 
0000334060 00000 n 
0000304064 00000 n 
0000137538 00000 n 
0000138697 00000 n 
0000334091 00000 n 
0000334122 00000 n 
0000304230 00000 n 
0000138719 00000 n 
0000139871 00000 n 
0000334153 00000 n 
0000334184 00000 n 
0000304396 00000 n 
0000139893 00000 n 
0000140998 00000 n 
0000334215 00000 n 
0000334246 00000 n 
0000304562 00000 n 
0000141020 00000 n 
0000142148 00000 n 
0000334277 00000 n 
0000334308 00000 n 
0000304728 00000 n 
0000142170 00000 n 
0000143322 00000 n 
0000334339 00000 n 
0000334370 00000 n 
0000304894 00000 n 
0000143344 00000 n 
0000144492 00000 n 
0000334401 00000 n 
0000334432 00000 n 
0000305060 00000 n 
0000144514 00000 n 
0000145656 00000 n 
0000334463 00000 n 
0000334494 00000 n 
0000305226 00000 n 
0000145678 00000 n 
0000146857 00000 n 
0000334525 00000 n 
0000334556 00000 n 
0000305392 00000 n 
0000146879 00000 n 
0000148097 00000 n 
0000334587 00000 n 
0000334618 00000 n 
0000305558 00000 n 
0000148119 00000 n 
0000149266 00000 n 
0000334649 00000 n 
0000334680 00000 n 
0000305724 00000 n 
0000149288 00000 n 
0000150357 00000 n 
0000334711 00000 n 
0000334742 00000 n 
0000305890 00000 n 
0000150378 00000 n 
0000151469 00000 n 
0000334773 00000 n 
0000334804 00000 n 
0000306056 00000 n 
0000151491 00000 n 
0000152630 00000 n 
0000334835 00000 n 
0000334866 00000 n 
0000306222 00000 n 
0000152652 00000 n 
0000153793 00000 n 
0000334897 00000 n 
0000334928 00000 n 
0000306388 00000 n 
0000153815 00000 n 
0000154977 00000 n 
0000334959 00000 n 
0000334990 00000 n 
0000306554 00000 n 
0000154999 00000 n 
0000156151 00000 n 
0000335021 00000 n 
0000335052 00000 n 
0000306720 00000 n 
0000156173 00000 n 
0000157301 00000 n 
0000335083 00000 n 
0000335114 00000 n 
0000306886 00000 n 
0000157323 00000 n 
0000158494 00000 n 
0000335145 00000 n 
0000335176 00000 n 
0000307052 00000 n 
0000158516 00000 n 
0000159656 00000 n 
0000335207 00000 n 
0000335238 00000 n 
0000307218 00000 n 
0000159678 00000 n 
0000160789 00000 n 
0000335269 00000 n 
0000335300 00000 n 
0000307384 00000 n 
0000160811 00000 n 
0000162031 00000 n 
0000335331 00000 n 
0000335362 00000 n 
0000307550 00000 n 
0000162053 00000 n 
0000163202 00000 n 
0000335393 00000 n 
0000335424 00000 n 
0000307716 00000 n 
0000163224 00000 n 
0000164395 00000 n 
0000335455 00000 n 
0000335486 00000 n 
0000307882 00000 n 
0000164417 00000 n 
0000165604 00000 n 
0000335517 00000 n 
0000335548 00000 n 
0000308048 00000 n 
0000165626 00000 n 
0000166848 00000 n 
0000335579 00000 n 
0000335610 00000 n 
0000308214 00000 n 
0000166870 00000 n 
0000168103 00000 n 
0000335641 00000 n 
0000335672 00000 n 
0000308380 00000 n 
0000168125 00000 n 
0000169338 00000 n 
0000335703 00000 n 
0000335734 00000 n 
0000308546 00000 n 
0000169360 00000 n 
0000170572 00000 n 
0000335765 00000 n 
0000335796 00000 n 
0000308712 00000 n 
0000170594 00000 n 
0000171863 00000 n 
0000335827 00000 n 
0000335858 00000 n 
0000308878 00000 n 
0000171885 00000 n 
0000173093 00000 n 
0000335889 00000 n 
0000335920 00000 n 
0000309044 00000 n 
0000173115 00000 n 
0000174286 00000 n 
0000335951 00000 n 
0000335982 00000 n 
0000309210 00000 n 
0000174308 00000 n 
0000175504 00000 n 
0000336013 00000 n 
0000336044 00000 n 
0000309376 00000 n 
0000175526 00000 n 
0000176701 00000 n 
0000336075 00000 n 
0000336106 00000 n 
0000309542 00000 n 
0000176723 00000 n 
0000177926 00000 n 
0000336137 00000 n 
0000336168 00000 n 
0000309708 00000 n 
0000177948 00000 n 
0000179093 00000 n 
0000336199 00000 n 
0000336230 00000 n 
0000309874 00000 n 
0000179115 00000 n 
0000180289 00000 n 
0000336261 00000 n 
0000336292 00000 n 
0000310040 00000 n 
0000180311 00000 n 
0000181507 00000 n 
0000336323 00000 n 
0000336354 00000 n 
0000310206 00000 n 
0000181529 00000 n 
0000182682 00000 n 
0000336385 00000 n 
0000336416 00000 n 
0000310372 00000 n 
0000182704 00000 n 
0000183893 00000 n 
0000336447 00000 n 
0000336478 00000 n 
0000310538 00000 n 
0000183915 00000 n 
0000185140 00000 n 
0000336509 00000 n 
0000336540 00000 n 
0000310704 00000 n 
0000185162 00000 n 
0000186432 00000 n 
0000336571 00000 n 
0000336602 00000 n 
0000310870 00000 n 
0000186454 00000 n 
0000187676 00000 n 
0000336633 00000 n 
0000336664 00000 n 
0000311036 00000 n 
0000187698 00000 n 
0000188915 00000 n 
0000336695 00000 n 
0000336726 00000 n 
0000311202 00000 n 
0000188937 00000 n 
0000190170 00000 n 
0000336757 00000 n 
0000336788 00000 n 
0000311368 00000 n 
0000190192 00000 n 
0000191446 00000 n 
0000336819 00000 n 
0000336850 00000 n 
0000311534 00000 n 
0000191468 00000 n 
0000192696 00000 n 
0000336881 00000 n 
0000336912 00000 n 
0000311700 00000 n 
0000192718 00000 n 
0000193930 00000 n 
0000336943 00000 n 
0000336974 00000 n 
0000311866 00000 n 
0000193952 00000 n 
0000195175 00000 n 
0000337005 00000 n 
0000337036 00000 n 
0000312032 00000 n 
0000195197 00000 n 
0000196397 00000 n 
0000337067 00000 n 
0000337098 00000 n 
0000312198 00000 n 
0000196419 00000 n 
0000197646 00000 n 
0000337129 00000 n 
0000337160 00000 n 
0000312364 00000 n 
0000197668 00000 n 
0000198796 00000 n 
0000337191 00000 n 
0000337222 00000 n 
0000312530 00000 n 
0000198818 00000 n 
0000199887 00000 n 
0000337253 00000 n 
0000337284 00000 n 
0000312696 00000 n 
0000199908 00000 n 
0000200974 00000 n 
0000337315 00000 n 
0000337346 00000 n 
0000312862 00000 n 
0000200995 00000 n 
0000202067 00000 n 
0000337377 00000 n 
0000337408 00000 n 
0000313028 00000 n 
0000202088 00000 n 
0000203180 00000 n 
0000337439 00000 n 
0000337470 00000 n 
0000313194 00000 n 
0000203202 00000 n 
0000204282 00000 n 
0000337501 00000 n 
0000337532 00000 n 
0000313360 00000 n 
0000204304 00000 n 
0000205396 00000 n 
0000337563 00000 n 
0000337594 00000 n 
0000313526 00000 n 
0000205418 00000 n 
0000206515 00000 n 
0000337625 00000 n 
0000337656 00000 n 
0000313692 00000 n 
0000206537 00000 n 
0000207699 00000 n 
0000337687 00000 n 
0000337718 00000 n 
0000313858 00000 n 
0000207721 00000 n 
0000208905 00000 n 
0000337749 00000 n 
0000337780 00000 n 
0000314024 00000 n 
0000208927 00000 n 
0000210124 00000 n 
0000337811 00000 n 
0000337842 00000 n 
0000314190 00000 n 
0000210146 00000 n 
0000211360 00000 n 
0000337873 00000 n 
0000337904 00000 n 
0000314356 00000 n 
0000211382 00000 n 
0000212609 00000 n 
0000337935 00000 n 
0000337966 00000 n 
0000314522 00000 n 
0000212631 00000 n 
0000213805 00000 n 
0000337997 00000 n 
0000338028 00000 n 
0000314688 00000 n 
0000213827 00000 n 
0000215009 00000 n 
0000338059 00000 n 
0000338090 00000 n 
0000314854 00000 n 
0000215031 00000 n 
0000216191 00000 n 
0000338121 00000 n 
0000338152 00000 n 
0000315020 00000 n 
0000216213 00000 n 
0000217409 00000 n 
0000338183 00000 n 
0000338214 00000 n 
0000315186 00000 n 
0000217431 00000 n 
0000218658 00000 n 
0000338245 00000 n 
0000338276 00000 n 
0000315352 00000 n 
0000218680 00000 n 
0000219865 00000 n 
0000338307 00000 n 
0000338338 00000 n 
0000315518 00000 n 
0000219887 00000 n 
0000221107 00000 n 
0000338369 00000 n 
0000338400 00000 n 
0000315684 00000 n 
0000221129 00000 n 
0000222320 00000 n 
0000338431 00000 n 
0000338462 00000 n 
0000315850 00000 n 
0000222342 00000 n 
0000223487 00000 n 
0000338493 00000 n 
0000338524 00000 n 
0000316016 00000 n 
0000223509 00000 n 
0000224668 00000 n 
0000338555 00000 n 
0000338586 00000 n 
0000316182 00000 n 
0000224690 00000 n 
0000225897 00000 n 
0000338617 00000 n 
0000338648 00000 n 
0000316348 00000 n 
0000225919 00000 n 
0000227156 00000 n 
0000338679 00000 n 
0000338710 00000 n 
0000316514 00000 n 
0000227178 00000 n 
0000228374 00000 n 
0000338741 00000 n 
0000338772 00000 n 
0000316680 00000 n 
0000228396 00000 n 
0000229562 00000 n 
0000338803 00000 n 
0000338834 00000 n 
0000316846 00000 n 
0000229584 00000 n 
0000230782 00000 n 
0000338865 00000 n 
0000338897 00000 n 
0000317014 00000 n 
0000230804 00000 n 
0000232018 00000 n 
0000338929 00000 n 
0000338961 00000 n 
0000317184 00000 n 
0000232041 00000 n 
0000233267 00000 n 
0000338993 00000 n 
0000339025 00000 n 
0000317354 00000 n 
0000233290 00000 n 
0000234600 00000 n 
0000339057 00000 n 
0000339089 00000 n 
0000317524 00000 n 
0000234623 00000 n 
0000235836 00000 n 
0000339121 00000 n 
0000339153 00000 n 
0000317694 00000 n 
0000235859 00000 n 
0000237077 00000 n 
0000339185 00000 n 
0000339217 00000 n 
0000317864 00000 n 
0000237100 00000 n 
0000238356 00000 n 
0000339249 00000 n 
0000339281 00000 n 
0000318034 00000 n 
0000238379 00000 n 
0000239548 00000 n 
0000339313 00000 n 
0000339345 00000 n 
0000318204 00000 n 
0000239571 00000 n 
0000240761 00000 n 
0000339377 00000 n 
0000339409 00000 n 
0000318374 00000 n 
0000240784 00000 n 
0000241978 00000 n 
0000339441 00000 n 
0000339473 00000 n 
0000318544 00000 n 
0000242001 00000 n 
0000243189 00000 n 
0000339505 00000 n 
0000339537 00000 n 
0000318714 00000 n 
0000243212 00000 n 
0000244373 00000 n 
0000339569 00000 n 
0000339601 00000 n 
0000318884 00000 n 
0000244396 00000 n 
0000245574 00000 n 
0000339633 00000 n 
0000339665 00000 n 
0000319054 00000 n 
0000245597 00000 n 
0000246798 00000 n 
0000339697 00000 n 
0000339729 00000 n 
0000319224 00000 n 
0000246821 00000 n 
0000248048 00000 n 
0000339761 00000 n 
0000339793 00000 n 
0000319394 00000 n 
0000248071 00000 n 
0000249262 00000 n 
0000339825 00000 n 
0000339857 00000 n 
0000319564 00000 n 
0000249285 00000 n 
0000250487 00000 n 
0000339889 00000 n 
0000339921 00000 n 
0000319734 00000 n 
0000250510 00000 n 
0000251710 00000 n 
0000339953 00000 n 
0000339985 00000 n 
0000319904 00000 n 
0000251733 00000 n 
0000252957 00000 n 
0000340017 00000 n 
0000340049 00000 n 
0000320074 00000 n 
0000252980 00000 n 
0000254218 00000 n 
0000340081 00000 n 
0000340113 00000 n 
0000320244 00000 n 
0000254241 00000 n 
0000255465 00000 n 
0000340145 00000 n 
0000340177 00000 n 
0000320414 00000 n 
0000255488 00000 n 
0000256711 00000 n 
0000340209 00000 n 
0000340241 00000 n 
0000320584 00000 n 
0000256734 00000 n 
0000257895 00000 n 
0000340273 00000 n 
0000340305 00000 n 
0000320754 00000 n 
0000257918 00000 n 
0000259104 00000 n 
0000340337 00000 n 
0000340369 00000 n 
0000320924 00000 n 
0000259127 00000 n 
0000260315 00000 n 
0000340401 00000 n 
0000340433 00000 n 
0000321094 00000 n 
0000260338 00000 n 
0000261507 00000 n 
0000340465 00000 n 
0000340497 00000 n 
0000321264 00000 n 
0000261530 00000 n 
0000262694 00000 n 
0000340529 00000 n 
0000340561 00000 n 
0000321434 00000 n 
0000262717 00000 n 
0000263918 00000 n 
0000340593 00000 n 
0000340625 00000 n 
0000321604 00000 n 
0000263941 00000 n 
0000265116 00000 n 
0000340657 00000 n 
0000340689 00000 n 
0000321774 00000 n 
0000265139 00000 n 
0000266312 00000 n 
0000340721 00000 n 
0000340753 00000 n 
0000321944 00000 n 
0000266335 00000 n 
0000267509 00000 n 
0000340785 00000 n 
0000340817 00000 n 
0000322114 00000 n 
0000267532 00000 n 
0000268703 00000 n 
0000340849 00000 n 
0000340881 00000 n 
0000322284 00000 n 
0000268726 00000 n 
0000269920 00000 n 
0000340913 00000 n 
0000340945 00000 n 
0000322454 00000 n 
0000269943 00000 n 
0000271171 00000 n 
0000340977 00000 n 
0000341009 00000 n 
0000322624 00000 n 
0000271194 00000 n 
0000272399 00000 n 
0000341041 00000 n 
0000341073 00000 n 
0000322794 00000 n 
0000272422 00000 n 
0000273609 00000 n 
0000341105 00000 n 
0000341137 00000 n 
0000322964 00000 n 
0000273632 00000 n 
0000274864 00000 n 
0000341169 00000 n 
0000341201 00000 n 
0000323134 00000 n 
0000274887 00000 n 
0000276121 00000 n 
0000341233 00000 n 
0000341265 00000 n 
0000323304 00000 n 
0000276144 00000 n 
0000277342 00000 n 
0000341297 00000 n 
0000341329 00000 n 
0000323474 00000 n 
0000277365 00000 n 
0000278574 00000 n 
0000341361 00000 n 
0000341393 00000 n 
0000323644 00000 n 
0000278597 00000 n 
0000279766 00000 n 
0000341425 00000 n 
0000341457 00000 n 
0000323814 00000 n 
0000279789 00000 n 
0000280960 00000 n 
0000341489 00000 n 
0000341521 00000 n 
0000323984 00000 n 
0000280983 00000 n 
0000282095 00000 n 
0000341553 00000 n 
0000341585 00000 n 
0000324154 00000 n 
0000282118 00000 n 
0000283314 00000 n 
0000341617 00000 n 
0000341649 00000 n 
0000324324 00000 n 
0000283337 00000 n 
0000284032 00000 n 
0000341681 00000 n 
0000341713 00000 n 
0000342667 00000 n 
0000341745 00000 n 
0000347999 00000 n 
trailer
<< /Size 1225 /Root 1 0 R /Info 2 0 R
/ID [(=\362\3274hq\334@\300lxj`oR\370)(=\362\3274hq\334@\300lxj`oR\370)]
>>
startxref
349651
%%EOF```

VS code + PDF Preview extention and I been just data mining on these streams from all these users; I have more than I even know I have; after all, I am 1 American, no team.

![image](https://user-images.githubusercontent.com/65768277/136643823-430fa4a9-bfda-41e2-8847-a54807f6f915.png)
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

``when you find yourself on this list and realize IAMADMIN dont even try firebase CLI or google sdk; theres no vk_escape here either``

![image](https://user-images.githubusercontent.com/65768277/136643758-d1bb58c7-8511-4a52-b122-117d40269751.png)

`` White hats get paid to build walls. Blackhats break them down to get paid. Red hats have no walls, Red hats eat Blackhats for breakfast. ```

![image](https://user-images.githubusercontent.com/65768277/136644080-8d282460-2b15-4056-9a6b-ffff93006e42.png)
```

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

![image](https://user-images.githubusercontent.com/65768277/136643545-51349671-0207-45b5-abd2-ca4091a6d145.png)
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Apparently I tried to DOX Esoterik.. I don't like dox, thats such a dirty person skidding poop kind of thing to do.  I thought I was nice to call him Erik Burton. I have have so much data; it will take me a long time to go through. This esoterik, aka "kitty" actual real name exposed on first on Skype and using  GitHub API:. /Users/antonysengole. I think its cheesy to drop private conversations, I have thousands, in one he said, "my blood is 99% amphetamine", he also, loves Minecraft. (i leaked your MCclient to your skid friend) esotk gives skeet invites for child pornography of, "femboys". Skeet is mostly filled with them, because the  pedophiles  moderating the invites prey on confused children and run exit scams, forums for misinformation and use many alter identities. I use my real name, because handles are for people who have something to hide. If your reading this, most of the known hvh cheats are run by the same group; and, they sell your information if you purchase any of their products.

![image](https://user-images.githubusercontent.com/65768277/136637108-627a827d-b3d6-447a-a0e5-b097693cb42c.png)

![image](https://user-images.githubusercontent.com/65768277/136637137-ef88b3da-e6f0-42a0-9073-517db7ae53be.png)

``if you find yourself on any of this;  you can message me to remove your information and I will.``
![image](https://user-images.githubusercontent.com/65768277/136644314-cc2443e2-7f17-4b93-b01e-7ca5076b7ada.png)


![image](https://user-images.githubusercontent.com/65768277/136637281-4e477fcc-01d2-469c-ac31-2bdf39eb432c.png)

![image](https://user-images.githubusercontent.com/65768277/136637235-0e188b87-5ccf-4ada-a096-4b19686f6c88.png)


https://discordapp.com/channels/883825581114945566/884147932910202941/896182095083352104



-------------------
ESOTK, ESTKK, es3n1n, NeverLose.cc, OTC, GameSense.is and VACBAN.WTF are all skeet/ all onetap; esotk, esoterik, didn't and doesn't crack anything. When I went to release this, he faked Gamesenseis FBI scam, You can take a look here:![image](https://user-images.githubusercontent.com/65768277/136633552-8eb7dc9b-72fe-46cb-8c0a-f33b906e53a3.png)
 it was just the promotional free resources and soon as that was ran through? FBI takedown huh? ExitScam really. Next fake crack neverlose, another scam money grab with yet another fake crack , "neverlose.is". These cheats are all the same, and by deleting both he is making all users pay for the same shit skid wrapper and client. They give you whatever you want; and its as easy as  drag and drop a menu into a base client with the configs that those clients that they are known for ( visuals,luas, js, or any other functions functions ) infact these api's bases from these cheats start with Luajitt but heavily rely on  Microsoft SDK, API documentation for compatibility and security if deployed as a cloud service. The origional and only crack of gamesense.pub that I know of was done by  https://interwebz.cc/, and it is what most people call supremacy. He did this by getting skeet users to dump functions while playing. The code is 90% a true skeet paste.You can see this origional source of it here, https://github.com/OneshotGH/supremacy as well as the client for it,  and it shows us how these cheats started off with imgui, and implementing cheat features into the client as a way to make the menus and quickly add features for upgrades so you didn't need to rebuild the client unless you needed to change offsets. This makes it really easy to drop in new code to cange the menu; with editors like https://github.com/repos/vurtun/nuklear and dear imgui persona2editor, and codepen should you want to pay for the subscription; You don't need to know code, just be fluent in paint(joking,but not joking). I will simplify this even more so for you, by including dear-imgui persona2editor graphical editor, and onetap base so that you can play paint and copy and paste a drop in custom menu for a "not really cracked, just pasted client that uses gamesense Lua, giving you those visuals, and plugins the gamesensical content creators and gamesense.pub creators make living scamming children with. I can't imagine AoE community allowing modders to charge for mods as if they developed something. In OneshotGH's fork of interwebz.cc he does the same with windows sdk used for https://github.com/OneshotGH/sdk-api. SDK API, and https://github.com/OneshotGH/Monolith.club-LUA-API if you want to use it as a base if your gonna try to build it locally with generated FastApi, and a sandboxed VM to mock the GameSenseLuaCloudLoader. probably easier to embed luajitt, to a client you build from gamesensical documentation by importing it to swagger.io and exporting a client that supports all our requirements here. I will be embedding luajit https://luajit.org/extensions.html#exceptions for c code for the api will heavily rely on it, import Luajitt c ext, Lua extended , LUACloudApi ext, and sublime linter before GO, IMGUI-js is used to convert C to J's and OT-DATA to require the javascript to save data to communicate to a datafile using the `save` function so we then add a hook to that datafile in your application so that the data is continuously "streamed" over the `Reader` channel. " to the cheat using imgui-js. SKEET, neverlose , onetap all require RESTFull API and FFI libraries to be imported ( luajit ) ( see https://gamesensical.gitbook.io/docs/developers/globals for documentation ).
![image](https://user-images.githubusercontent.com/65768277/131581596-b72b3aa2-43b2-4d6c-828a-15af3d8cf1bc.png)



![image](https://user-images.githubusercontent.com/65768277/131305555-d04825d5-4a82-47b8-8cd3-f037b1db80ae.png)

We start with gamesense.pub org on github. notice how he states since they cracked it, well he is they; a this is obvious when he pushes vacban1WTF te the repo. e3s1n is esotk, and he is The creator of " OTC CRACK", neverlose and gamesenese.is  crack? No, its not a crack it OTC 3 was https://github.com/ZaUserA/OneTap-v3-Js this API by, this happens to be VACBAN.wtf's full api documentation of see:npm install onetap-api. OTC v4 now that they moved to cloud service https://www.npmjs.com/package/onetap-cloud-api & in beta is support for ts. https://www.npmjs.com/package/onetap-ts. I use https://github.com/IBM/swift-backend-for-frontend, because it meets the restful prerequisite, swagger.io's compatability, because I am going to want to run a moc server locally, also Building out the Backend for Frontend (BFF) architecture pattern will help you find and fix bugs while you build it.

![image](https://user-images.githubusercontent.com/65768277/131581689-21641a4a-b702-4122-993a-2c649616b65e.png)

heres on 7/11 when i owned they ass every user authenticated: https://discordapp.com/channels/883825581114945566/884147932910202941/896182095083352104
 https://discord.gg/9RxCPt7ja7

README.md

![image](https://user-images.githubusercontent.com/65768277/131306536-0b7d9003-36a7-4e62-a80e-2583da4e0785.png)



#############################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################
I dont play CSGO, I dont HvH, im 37 years; I dont watch TV. I read, I hack, I work. I am an OG 
 ![image](https://user-images.githubusercontent.com/65768277/131276282-9b33a22b-a012-4200-a4b4-9f5536c08fee.png)
