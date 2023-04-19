function draw_hist(t,r){d3.format(",0d");var a=10,e=30,n=30,s=30,c=400-s-e,i=200-a-n,o=d3.scale.linear().domain([-5,5]).range([0,c]),l=d3.layout.histogram().bins(o.ticks(20))(r),d=d3.scale.linear().domain([0,d3.max(l,(function(t){return t.y+Math.sqrt(t.y)}))]).range([i,0]);correction=d(0);var u=d3.svg.axis().scale(o).ticks(3).tickFormat((function(t){return""})).orient("bottom"),f=d3.svg.axis().scale(d).ticks(4).orient("left"),h=d3.select(t).append("svg").attr("width",c+s+e).attr("height",i+a+n).append("g").attr("transform","translate("+s+","+a+")"),x=h.selectAll(".bar").data(l).enter().append("svg:circle").attr("stroke","black").attr("fill",(function(t,r){return"black"})).attr("transform",(function(t){return"translate("+o(t.x)+","+d(t.y)+")"})).attr("r",(function(t,r){return 1}));return h.selectAll(".bar").data(l).enter().append("svg:line").attr("x1",0).attr("x2",0).attr("y1",(function(t){return d(Math.sqrt(t.y))-correction})).attr("y2",(function(t){return-d(Math.sqrt(t.y))+correction})).attr("transform",(function(t){return"translate("+o(t.x)+","+d(t.y)+")"})).attr("stroke","black").attr("stroke-width",1),h.selectAll(".bar").data(l).enter().append("svg:line").attr("x1",-2).attr("x2",2).attr("y1",(function(t){return d(Math.sqrt(t.y))-correction})).attr("y2",(function(t){return d(Math.sqrt(t.y))-correction})).attr("transform",(function(t){return"translate("+o(t.x)+","+d(t.y)+")"})).attr("stroke","black").attr("stroke-width",1),h.selectAll(".bar").data(l).enter().append("svg:line").attr("x1",-2).attr("x2",2).attr("y1",(function(t){return-d(Math.sqrt(t.y))+correction})).attr("y2",(function(t){return-d(Math.sqrt(t.y))+correction})).attr("transform",(function(t){return"translate("+o(t.x)+","+d(t.y)+")"})).attr("stroke","black").attr("stroke-width",1),x.append("rect").attr("x",1).attr("width",o(l[0].dx)).attr("height",(function(t){return i-d(t.y)})),h.append("g").attr("class","x axis").attr("transform","translate(0,"+i+")").call(u),h.append("text").attr("class","x label").attr("text-anchor","end").attr("x",c).attr("y",i+20).text("m (GeV)"),h.append("g").attr("class","y axis").attr("transform","translate(0, 0)").call(f),h.append("text").attr("class","y label").attr("text-anchor","end").attr("y",-20).attr("dy","-1em").attr("dx","-0.5em").attr("transform","rotate(-90)").text("events"),h}function Histogram(t){this.values=[],draw_hist(t,[]),this.add_events=function(r){var a=d3.range(r).map(d3.random.normal(0,1));this.values=$.merge(this.values,a),d3.select(t).select("svg").remove(),draw_hist(t,this.values)},this.clear=function(){d3.select(t).select("svg").remove(),this.values=[],draw_hist(t,[])}}
