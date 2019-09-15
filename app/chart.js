am4core.useTheme(am4themes_animated);

angular.module("chart", [])

    .directive("chart1", function () {
        return {
            restrict: "E",
            scope: {},
            template: "<div id='chartdiv1'></div>",
            replace: true,
            link: function ($scope) {
                var chart = am4core.create("chartdiv1", am4charts.PieChart);


// Add data
                chart.data = [ {
                    "country": "Lithuania",
                    "litres": 501.9
                }, {
                    "country": "Czech Republic",
                    "litres": 301.9
                }, {
                    "country": "Ireland",
                    "litres": 201.1
                }, {
                    "country": "Germany",
                    "litres": 165.8
                }, {
                    "country": "Australia",
                    "litres": 139.9
                }, {
                    "country": "Austria",
                    "litres": 128.3
                }, {
                    "country": "UK",
                    "litres": 99
                }, {
                    "country": "Belgium",
                    "litres": 60
                }, {
                    "country": "The Netherlands",
                    "litres": 50
                } ];

// Set inner radius
                chart.innerRadius = am4core.percent(50);

// Add and configure Series
                var pieSeries = chart.series.push(new am4charts.PieSeries());
                pieSeries.dataFields.value = "litres";
                pieSeries.dataFields.category = "country";
                pieSeries.slices.template.stroke = am4core.color("#fff");
                pieSeries.slices.template.strokeWidth = 2;
                pieSeries.slices.template.strokeOpacity = 1;

// This creates initial animation
                pieSeries.hiddenState.properties.opacity = 1;
                pieSeries.hiddenState.properties.endAngle = -90;
                pieSeries.hiddenState.properties.startAngle = -90;



            }
        };
    })

    .directive("chart4", function () {
        return {
            restrict: "E",
            scope: {},
            template: "<div id='chartdiv4'></div>",
            replace: true,
            link: function ($scope) {
                var chart = am4core.create("chartdiv4", am4charts.XYChart);

                chart.paddingRight = 20;

                var data = [];
                var visits = 10;
                for (var i = 1; i < 366; i++) {
                    visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
                    data.push({ date: new Date(2018, 0, i), name: "name" + i, value: visits });
                }

                chart.data = data;

                var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
                dateAxis.renderer.grid.template.location = 0;

                var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
                valueAxis.tooltip.disabled = true;
                valueAxis.renderer.minWidth = 35;

                var series = chart.series.push(new am4charts.LineSeries());
                series.dataFields.dateX = "date";
                series.dataFields.valueY = "value";

                series.tooltipText = "{valueY.value}";
                chart.cursor = new am4charts.XYCursor();

                var scrollbarX = new am4charts.XYChartScrollbar();
                scrollbarX.series.push(series);
                chart.scrollbarX = scrollbarX;

                $scope.$on("$destroy", function () {
                    chart.dispose();
                });
            }
        };
    })

    .directive("chart3", function () {
        return {
            restrict: "E",
            scope: {},
            template: "<div id='chartdiv3'></div>",
            replace: true,
            link: function ($scope) {
                var chart = am4core.create("chartdiv3", am4charts.PieChart);


// Add data
                        chart.data = [ {
                            "country": "Lithuania",
                            "litres": 501.9
                        }, {
                            "country": "Czechia",
                            "litres": 301.9
                        }, {
                            "country": "Ireland",
                            "litres": 201.1
                        }, {
                            "country": "Germany",
                            "litres": 165.8
                        }, {
                            "country": "Australia",
                            "litres": 139.9
                        }, {
                            "country": "Austria",
                            "litres": 128.3
                        }, {
                            "country": "UK",
                            "litres": 99
                        }, {
                            "country": "Belgium",
                            "litres": 60
                        }, {
                            "country": "The Netherlands",
                            "litres": 50
                        } ];

// Add and configure Series
                        var pieSeries = chart.series.push(new am4charts.PieSeries());
                        pieSeries.dataFields.value = "litres";
                        pieSeries.dataFields.category = "country";
                        pieSeries.slices.template.stroke = am4core.color("#fff");
                        pieSeries.slices.template.strokeWidth = 2;
                        pieSeries.slices.template.strokeOpacity = 1;

// This creates initial animation
                        pieSeries.hiddenState.properties.opacity = 1;
                        pieSeries.hiddenState.properties.endAngle = -90;
                        pieSeries.hiddenState.properties.startAngle = -90;



            }
        };
    })

    .directive("chart2", function () {
        return {
            restrict: "E",
            scope: {},
            template: "<div id='chartdiv2'></div>",
            replace: true,
            link: function ($scope) {

                // Create chart instance
                var chart = am4core.create("chartdiv2", am4charts.XYChart3D);



                        // var chart = am4core.create("chartdiv", am4charts.XYChart3D);
                        chart.paddingBottom = 30;
                        chart.angle = 35;

// Add data
                        chart.data = [{
                            "country": "USA",
                            "visits": 4025
                        }, {
                            "country": "China",
                            "visits": 1882
                        }, {
                            "country": "Japan",
                            "visits": 1809
                        }, {
                            "country": "Germany",
                            "visits": 1322
                        }, {
                            "country": "UK",
                            "visits": 1122
                        }, {
                            "country": "France",
                            "visits": 1114
                        }, {
                            "country": "India",
                            "visits": 984
                        }, {
                            "country": "Spain",
                            "visits": 711
                        }, {
                            "country": "Netherlands",
                            "visits": 665
                        }, {
                            "country": "Russia",
                            "visits": 580
                        }, {
                            "country": "South Korea",
                            "visits": 443
                        }, {
                            "country": "Canada",
                            "visits": 441
                        }, {
                            "country": "Brazil",
                            "visits": 395
                        }, {
                            "country": "Italy",
                            "visits": 386
                        }, {
                            "country": "Taiwan",
                            "visits": 338
                        }];

// Create axes
                        var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
                        categoryAxis.dataFields.category = "country";
                        categoryAxis.renderer.grid.template.location = 0;
                        categoryAxis.renderer.minGridDistance = 20;
                        categoryAxis.renderer.inside = true;
                        categoryAxis.renderer.grid.template.disabled = true;

                        let labelTemplate = categoryAxis.renderer.labels.template;
                        labelTemplate.rotation = -90;
                        labelTemplate.horizontalCenter = "left";
                        labelTemplate.verticalCenter = "middle";
                        labelTemplate.dy = 10; // moves it a bit down;
                        labelTemplate.inside = false; // this is done to avoid settings which are not suitable when label is rotated

                        var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
                        valueAxis.renderer.grid.template.disabled = true;

// Create series
                        var series = chart.series.push(new am4charts.ConeSeries());
                        series.dataFields.valueY = "visits";
                        series.dataFields.categoryX = "country";

                        var columnTemplate = series.columns.template;
                        columnTemplate.adapter.add("fill", function(fill, target) {
                            return chart.colors.getIndex(target.dataItem.index);
                        })

                        columnTemplate.adapter.add("stroke", function(stroke, target) {
                            return chart.colors.getIndex(target.dataItem.index);
                        })

            }
        };
    })


;