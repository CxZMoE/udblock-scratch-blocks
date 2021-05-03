// Do not edit this file; automatically generated by build.py.
'use strict';

Blockly.Arduino=new Blockly.Generator("Arduino");Blockly.Arduino.ORDER_ATOMIC=0;Blockly.Arduino.ORDER_MEMBER=1;Blockly.Arduino.ORDER_FUNCTION_CALL=2;Blockly.Arduino.ORDER_INCREMENT=3;Blockly.Arduino.ORDER_DECREMENT=3;Blockly.Arduino.ORDER_BITWISE_NOT=4.1;Blockly.Arduino.ORDER_UNARY_PLUS=4.2;Blockly.Arduino.ORDER_UNARY_NEGATION=4.3;Blockly.Arduino.ORDER_LOGICAL_NOT=4.4;Blockly.Arduino.ORDER_SIZEOF=4.5;Blockly.Arduino.ORDER_NEW=4.6;Blockly.Arduino.ORDER_DELETE=4.7;Blockly.Arduino.ORDER_DIVISION=5.1;
Blockly.Arduino.ORDER_MULTIPLICATION=5.2;Blockly.Arduino.ORDER_MODULUS=5.3;Blockly.Arduino.ORDER_SUBTRACTION=6.1;Blockly.Arduino.ORDER_ADDITION=6.2;Blockly.Arduino.ORDER_BITWISE_SHIFT=7;Blockly.Arduino.ORDER_RELATIONAL=8;Blockly.Arduino.ORDER_EQUALITY=9;Blockly.Arduino.ORDER_BITWISE_AND=10;Blockly.Arduino.ORDER_BITWISE_XOR=11;Blockly.Arduino.ORDER_BITWISE_OR=12;Blockly.Arduino.ORDER_LOGICAL_AND=13;Blockly.Arduino.ORDER_LOGICAL_OR=14;Blockly.Arduino.ORDER_CONDITIONAL=15;
Blockly.Arduino.ORDER_ASSIGNMENT=16;Blockly.Arduino.ORDER_COMMA=17;Blockly.Arduino.ORDER_NONE=99;
Blockly.Arduino.ORDER_OVERRIDES=[[Blockly.Arduino.ORDER_FUNCTION_CALL,Blockly.Arduino.ORDER_MEMBER],[Blockly.Arduino.ORDER_FUNCTION_CALL,Blockly.Arduino.ORDER_FUNCTION_CALL],[Blockly.Arduino.ORDER_MEMBER,Blockly.Arduino.ORDER_MEMBER],[Blockly.Arduino.ORDER_MEMBER,Blockly.Arduino.ORDER_FUNCTION_CALL],[Blockly.Arduino.ORDER_LOGICAL_NOT,Blockly.Arduino.ORDER_LOGICAL_NOT],[Blockly.Arduino.ORDER_MULTIPLICATION,Blockly.Arduino.ORDER_MULTIPLICATION],[Blockly.Arduino.ORDER_ADDITION,Blockly.Arduino.ORDER_ADDITION],
[Blockly.Arduino.ORDER_LOGICAL_AND,Blockly.Arduino.ORDER_LOGICAL_AND],[Blockly.Arduino.ORDER_LOGICAL_OR,Blockly.Arduino.ORDER_LOGICAL_OR]];Blockly.Arduino.init=function(a){Blockly.Arduino.definitions_=Object.create(null);Blockly.Arduino.variables_=Object.create(null);Blockly.Arduino.functions_=Object.create(null);Blockly.Arduino.setups_=Object.create(null)};
Blockly.Arduino.finish=function(a){var d=[],c=[],b;for(b in Blockly.Arduino.definitions_){var e=Blockly.Arduino.definitions_[b];e.match(/^#include/)?d.push(e):c.push(e)}e=[];for(b in Blockly.Arduino.variables_)e.push(Blockly.Arduino.variables_[b]);var f=[];for(b in Blockly.Arduino.functions_)f.push(Blockly.Arduino.functions_[b]);var g=[];for(b in Blockly.Arduino.setups_)g.push(Blockly.Arduino.setups_[b]);delete Blockly.Arduino.definitions_;delete Blockly.Arduino.variables_;delete Blockly.Arduino.functions_;
delete Blockly.Arduino.setups_;return(d.join("\n")+"\n\n"+c.join("\n")+"\n"+e.join("\n")+"\n"+f.join("\n")+"\nvoid setup() {\n"+g.join("\n")+"\n}\n\nvoid loop() {\n"+a+"\n}\n\n").replace(/\n\n+/g,"\n\n").replace(/\n*$/,"\n\n\n")};Blockly.Arduino.scrubNakedValue=function(a){return a+";\n"};Blockly.Arduino.quote_=function(a){a=a.replace(/\\/g,"\\\\").replace(/\n/g,"\\\n");var d="'";-1!==a.indexOf("'")&&(-1===a.indexOf('"')?d='"':a=a.replace(/'/g,"\\'"));return d+a+d};
Blockly.Arduino.scrub_=function(a,d){var c="";if(!a.outputConnection||!a.outputConnection.targetConnection){var b=a.getCommentText();(b=Blockly.utils.wrap(b,Blockly.Arduino.COMMENT_WRAP-3))&&(c=a.getProcedureDef?c+("/**\n"+Blockly.Arduino.prefixLines(b+"\n"," * ")+" */\n"):c+Blockly.Arduino.prefixLines(b+"\n","// "));for(var e=0;e<a.inputList.length;e++)a.inputList[e].type==Blockly.INPUT_VALUE&&(b=a.inputList[e].connection.targetBlock())&&(b=Blockly.Arduino.allNestedComments(b))&&(c+=Blockly.Arduino.prefixLines(b,
"// "))}a=a.nextConnection&&a.nextConnection.targetBlock();a=Blockly.Arduino.blockToCode(a);return c+d+a};Blockly.Arduino.base_setup=function(){var a=Blockly.Arduino.statementToCode(this,"DO");(a=a.replace(/(^\s*)|(\s*$)/g,""))&&(Blockly.Arduino.setups_.setup_setup=a);return""};
Blockly.Arduino.control_if=function(){var a,d=Blockly.Arduino.valueToCode(this,"IF0",Blockly.Arduino.ORDER_NONE)||"false",c=Blockly.Arduino.statementToCode(this,"SUBSTACK");console.log("statementToCode",Blockly.Arduino.statementToCode);console.log(c);var b="if ("+d+") {\n"+c+"\n}";for(a=1;a<=this.elseifCount_;a++)d=Blockly.Arduino.valueToCode(this,"IF"+a,Blockly.Arduino.ORDER_NONE)||"false",c=Blockly.Arduino.statementToCode(this,"DO"+a),b+=" else if ("+d+") {\n"+c+"}";this.elseCount_&&(c=Blockly.Arduino.statementToCode(this,
"ELSE"),b+=" else {\n"+c+"\n}");return b+"\n"};Blockly.Arduino.control_forever=function(){var a=Blockly.Arduino.valueToCode(this,"logic",Blockly.Arduino.ORDER_NONE)||"false",d=Blockly.Arduino.statementToCode(this,"SUBSTACK");return a="while(!("+a+")) {\n"+(d+"\n")+"}\n"};
Blockly.Arduino.controls_switch_case=function(){var a,d=Blockly.Arduino.valueToCode(this,"IF0",Blockly.Arduino.ORDER_NONE)||"NULL",c="switch ("+d+") {\n";for(a=1;a<=this.elseifCount_;a++){d=Blockly.Arduino.valueToCode(this,"IF"+a,Blockly.Arduino.ORDER_NONE)||"NULL";var b=Blockly.Arduino.statementToCode(this,"DO"+a);c+=" case "+d+": \n"+b+"  break;\n"}this.elseCount_&&(b=Blockly.Arduino.statementToCode(this,"ELSE"),c+=" default:\n"+b+"  break;\n");return c+"}\n"};
