jQuery.extend(jQuery.validator.methods,{date:function(d,t){return this.optional(t)||/^\d\d?\-\d\d?\-\d\d\d?\d?$/.test(d)},number:function(d,t){return this.optional(t)||/^-?(?:\d+|\d{1,3}(?:\.\d{3})+)(?:,\d+)?$/.test(d)}});