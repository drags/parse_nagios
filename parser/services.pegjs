top
 = comment* blocks:block* { return blocks; }

block
  = "define service {" comment* settings:setting* "}" __? { return settings; }

setting
  = __ tag:tag __ val:value { var o = {}; o[tag] = val; return o; }

comment
  = __ "#"[^\n]+ _ { return true; }

tag
  = tag:[a-zA-Z0-9_]+ { return tag.join(""); }

value
  = val:[^\n]+ _? { return val.join(""); }

_ = [ \n\t]

__ = _*
