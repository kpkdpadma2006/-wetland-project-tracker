const projectData = {

    currentPhase: "Feature Generation",

    projectStatus: "On Track",

    lastUpdated: "16 August 2026",

    tasks: [
        {
            name: "Study Area Selection & Boundary",
            completed: true
        },
        {
            name: "GEE Registration & Setup",
            completed: true
        },
        {
            name: "Study Area Upload to GEE",
            completed: true
        },
        {
            name: "Landsat Data Collection",
            completed: true
        },
        {
            name: "Reference LULC Download",
            completed: true
        },
        {
            name: "NDVI Generation",
            completed: true
        },
        {
            name: "NDWI Generation",
            completed: true
        },
        {
            name: "MNDWI Generation",
            completed: false
        },
        {
            name: "NDMI Generation",
            completed: false
        },
        {
            name: "EVI / SAVI / NDBI",
            completed: false
        },
        {
            name: "Feature Stack Creation",
            completed: false
        },
        {
            name: "Training Polygon Creation",
            completed: false
        },
        {
            name: "Random Forest Classification",
            completed: false
        },
        {
            name: "Accuracy Assessment",
            completed: false
        },
        {
            name: "Temporal Change Detection",
            completed: false
        },
        {
            name: "Wetland Degradation Assessment",
            completed: false
        },
        {
            name: "Restoration Priority Mapping",
            completed: false
        },
        {
            name: "Final Maps & Report",
            completed: false
        }
    ],


    // =========================
    // TODAY
    // =========================

    today: {
        date: "16 August 2026",

        tasks: [
            {
                task: "Complete MNDWI generation",
                completed: false
            },
            {
                task: "Complete NDMI generation",
                completed: false
            },
            {
                task: "Check exported GeoTIFF values",
                completed: false
            }
        ]
    },


    // =========================
    // TOMORROW
    // =========================

    tomorrow: {
        date: "17 August 2026",

        tasks: [
            {
                task: "Complete EVI",
                completed: false
            },
            {
                task: "Complete SAVI",
                completed: false
            },
            {
                task: "Complete NDBI",
                completed: false
            },
            {
                task: "Verify all generated indices",
                completed: false
            }
        ]
    },


    // =========================
    // 30 DAY TARGET
    // =========================

    monthlyTarget: {

        startDate: "16 August 2026",

        endDate: "15 September 2026",

        weeks: [

            {
                week: "Week 1",
                period: "16–22 Aug",

                target: "Complete satellite data collection and spectral indices",

                tasks: [
                    "Landsat data",
                    "Sentinel-2 data",
                    "NDVI",
                    "NDWI",
                    "MNDWI",
                    "NDMI",
                    "EVI",
                    "SAVI",
                    "NDBI"
                ]
            },

            {
                week: "Week 2",
                period: "23–29 Aug",

                target: "Feature stack and training data",

                tasks: [
                    "Prepare feature stack",
                    "Check all bands",
                    "Create training polygons",
                    "Prepare training samples"
                ]
            },

            {
                week: "Week 3",
                period: "30 Aug–5 Sep",

                target: "Random Forest classification",

                tasks: [
                    "Run Random Forest",
                    "Generate classified maps",
                    "Prepare confusion matrix",
                    "Calculate Overall Accuracy",
                    "Calculate Kappa"
                ]
            },

            {
                week: "Week 4",
                period: "6–12 Sep",

                target: "Temporal change and degradation analysis",

                tasks: [
                    "Classify historical years",
                    "Compare wetland extent",
                    "Generate change detection",
                    "Assess wetland degradation"
                ]
            },

            {
                week: "Final Days",
                period: "13–15 Sep",

                target: "Restoration priority and final outputs",

                tasks: [
                    "Prepare restoration priority map",
                    "Prepare final maps",
                    "Complete analysis",
                    "Update report"
                ]
            }
        ]
    }
};