const projectData = {

    currentPhase: "Feature Generation",

    projectStatus: "On Track",

    lastUpdated: "16 August 2026",

   tasks: [

    {
        id: 1,
        name: "Study Area Selection & Finalization",
        phase: "Study Area",
        status: "completed"
    },

    {
        id: 2,
        name: "GEE Registration & Setup",
        phase: "Data Preparation",
        status: "completed"
    },

    {
        id: 3,
        name: "Study Area Upload to GEE",
        phase: "Data Preparation",
        status: "completed"
    },

    {
        id: 4,
        name: "Landsat Data Collection",
        phase: "Data Collection",
        status: "completed"
    },

    {
        id: 5,
        name: "Reference LULC Download",
        phase: "Data Collection",
        status: "completed"
    },

    {
        id: 6,
        name: "NDVI Generation",
        phase: "Feature Generation",
        status: "completed"
    },

    {
        id: 7,
        name: "NDWI Generation",
        phase: "Feature Generation",
        status: "completed"
    },

    {
        id: 8,
        name: "MNDWI Generation",
        phase: "Feature Generation",
        status: "current"
    },

    {
        id: 9,
        name: "NDMI Generation",
        phase: "Feature Generation",
        status: "pending"
    },

    {
        id: 10,
        name: "EVI Generation",
        phase: "Feature Generation",
        status: "pending"
    },

    {
        id: 11,
        name: "SAVI Generation",
        phase: "Feature Generation",
        status: "pending"
    },

    {
        id: 12,
        name: "NDBI Generation",
        phase: "Feature Generation",
        status: "pending"
    },

    {
        id: 13,
        name: "Feature Stack Creation",
        phase: "Feature Generation",
        status: "pending"
    },

    {
        id: 14,
        name: "Training Polygon Creation",
        phase: "Machine Learning",
        status: "pending"
    },

    {
        id: 15,
        name: "Random Forest Classification",
        phase: "Machine Learning",
        status: "pending"
    },

    {
        id: 16,
        name: "Accuracy Assessment",
        phase: "Machine Learning",
        status: "pending"
    },

    {
        id: 17,
        name: "Temporal Change Detection",
        phase: "Change Analysis",
        status: "pending"
    },

    {
        id: 18,
        name: "Wetland Degradation Assessment",
        phase: "Degradation",
        status: "pending"
    },

    {
        id: 19,
        name: "Restoration Priority Mapping",
        phase: "Restoration",
        status: "pending"
    },

    {
        id: 20,
        name: "Final Maps & Report",
        phase: "Final Output",
        status: "pending"
    }

],

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