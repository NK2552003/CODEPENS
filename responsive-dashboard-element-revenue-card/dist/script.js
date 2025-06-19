document.addEventListener("DOMContentLoaded", function () {
  // GSAP import (or declaration if not using modules)
  gsap.registerPlugin();

  const platformData = {
    behance: {
      color: "#2563eb",
      lightColor: "#93c5fd",
      revenue: [
        { month: "Sep", value: 10700 },
        { month: "Oct", value: 7300 },
        { month: "Nov", value: 11890 },
        { month: "Dec", value: 12500 },
        { month: "Jan", value: 14200 },
        { month: "Feb", value: 13100 }
      ],
      leads: [
        { month: "Sep", value: 120 },
        { month: "Oct", value: 95 },
        { month: "Nov", value: 133 },
        { month: "Dec", value: 140 },
        { month: "Jan", value: 155 },
        { month: "Feb", value: 150 }
      ],
      winrate: [
        { month: "Sep", value: 32 },
        { month: "Oct", value: 28 },
        { month: "Nov", value: 38 },
        { month: "Dec", value: 40 },
        { month: "Jan", value: 42 },
        { month: "Feb", value: 41 }
      ],
      totalRevenue: "$20,467",
      chartType: "bar"
    },
    dribbble: {
      color: "#ec4899",
      lightColor: "#f9a8d4",
      revenue: [
        { month: "Sep", value: 8500 },
        { month: "Oct", value: 12300 },
        { month: "Nov", value: 9800 },
        { month: "Dec", value: 10200 },
        { month: "Jan", value: 11000 },
        { month: "Feb", value: 10500 }
      ],
      leads: [
        { month: "Sep", value: 95 },
        { month: "Oct", value: 145 },
        { month: "Nov", value: 110 },
        { month: "Dec", value: 115 },
        { month: "Jan", value: 125 },
        { month: "Feb", value: 120 }
      ],
      winrate: [
        { month: "Sep", value: 28 },
        { month: "Oct", value: 42 },
        { month: "Nov", value: 33 },
        { month: "Dec", value: 35 },
        { month: "Jan", value: 38 },
        { month: "Feb", value: 37 }
      ],
      totalRevenue: "$30,600",
      chartType: "line"
    },
    codepen: {
      color: "#10b981",
      lightColor: "#6ee7b7",
      revenue: [
        { month: "Sep", value: 5200 },
        { month: "Oct", value: 6800 },
        { month: "Nov", value: 9400 },
        { month: "Dec", value: 10100 },
        { month: "Jan", value: 11200 },
        { month: "Feb", value: 10800 }
      ],
      leads: [
        { month: "Sep", value: 65 },
        { month: "Oct", value: 78 },
        { month: "Nov", value: 105 },
        { month: "Dec", value: 110 },
        { month: "Jan", value: 120 },
        { month: "Feb", value: 115 }
      ],
      winrate: [
        { month: "Sep", value: 22 },
        { month: "Oct", value: 25 },
        { month: "Nov", value: 31 },
        { month: "Dec", value: 33 },
        { month: "Jan", value: 35 },
        { month: "Feb", value: 34 }
      ],
      totalRevenue: "$21,400",
      chartType: "area"
    },
    github: {
      color: "#8b5cf6",
      lightColor: "#c4b5fd",
      revenue: [
        { month: "Sep", value: 15200 },
        { month: "Oct", value: 13800 },
        { month: "Nov", value: 17400 },
        { month: "Dec", value: 18200 },
        { month: "Jan", value: 19500 },
        { month: "Feb", value: 18800 }
      ],
      leads: [
        { month: "Sep", value: 180 },
        { month: "Oct", value: 165 },
        { month: "Nov", value: 210 },
        { month: "Dec", value: 220 },
        { month: "Jan", value: 235 },
        { month: "Feb", value: 230 }
      ],
      winrate: [
        { month: "Sep", value: 45 },
        { month: "Oct", value: 40 },
        { month: "Nov", value: 52 },
        { month: "Dec", value: 55 },
        { month: "Jan", value: 58 },
        { month: "Feb", value: 57 }
      ],
      totalRevenue: "$46,400",
      chartType: "stacked"
    }
  };
  // Initialize variables
  let currentPlatform = "behance";
  let activeTab = "revenue";
  let chart = null;

  // DOM elements
  const platformLogo = document.getElementById("platform-logo");
  const selectedPlatform = document.getElementById("selected-platform");
  const platformDropdown = document.getElementById("platform-dropdown");
  const platformOptions = document.querySelectorAll(".platform-option");
  const tabButtons = document.querySelectorAll(".tab-btn");
  const sidebar = document.querySelector(".sidebar");
  const totalRevenueElement = document.getElementById("total-revenue");
  const chartWrapper = document.querySelector(".chart-wrapper");
  const chartLabels = document.querySelector(".chart-labels");
  const dashboardCard = document.querySelector(".dashboard-card");

  // Theme toggle functionality
  const themeToggleBtn = document.getElementById("theme-toggle-btn");
  themeToggleBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");
    localStorage.setItem(
      "theme",
      document.body.classList.contains("dark-theme") ? "dark" : "light"
    );

    // Update chart colors if chart exists
    if (chart) {
      updateChartColors();
      chart.update();
    }
  });

  // Check for saved theme preference
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
  }

  // Platform dropdown toggle
  selectedPlatform.addEventListener("click", function () {
    this.classList.toggle("active");
    platformDropdown.classList.toggle("active");
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", function (event) {
    if (!selectedPlatform.contains(event.target)) {
      selectedPlatform.classList.remove("active");
      platformDropdown.classList.remove("active");
    }
  });

  // Platform selection
  platformOptions.forEach((option) => {
    option.addEventListener("click", function () {
      const platform = this.getAttribute("data-platform");
      const logo = this.getAttribute("data-logo");

      // Update selected platform text
      selectedPlatform.querySelector("span").textContent = this.textContent;

      // Update platform logo
      platformLogo.textContent = logo;

      // Close dropdown
      selectedPlatform.classList.remove("active");
      platformDropdown.classList.remove("active");

      // Change platform
      changePlatform(platform);
    });
  });

  // Tab switching functionality
  tabButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Update active tab
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");

      // Get tab data and update chart
      activeTab = this.getAttribute("data-tab");
      updateChart();
    });
  });

  // Function to change platform
  function changePlatform(platform) {
    currentPlatform = platform;

    // Update sidebar color
    sidebar.className = "sidebar " + platform;

    // Update platform logo color
    platformLogo.className = "platform-logo " + platform;

    // Update total revenue
    totalRevenueElement.textContent = platformData[platform].totalRevenue;

    // Animate metrics with GSAP
    animateMetrics();

    // Update chart
    updateChart();
  }

  // Function to update chart based on current platform and active tab
  function updateChart() {
    const data = platformData[currentPlatform][activeTab];
    const chartType = platformData[currentPlatform].chartType;
    const color = platformData[currentPlatform].color;
    const lightColor = platformData[currentPlatform].lightColor;

    // Destroy previous chart if it exists
    if (chart) {
      chart.destroy();
    }

    // Get chart context
    const ctx = document.getElementById("analytics-chart").getContext("2d");

    // Set chart options based on chart type
    let chartOptions;

    // Get isDarkMode
    const isDarkMode = document.body.classList.contains("dark-theme");
    const gridColor = isDarkMode
      ? "rgba(255, 255, 255, 0.1)"
      : "rgba(0, 0, 0, 0.1)";
    const textColor = isDarkMode ? "#d1d1d6" : "#666666";

    // Format currency for tooltips
    const formatCurrency = (value) => {
      return activeTab === "revenue" ? "$" + value.toLocaleString() : value;
    };

    // Common chart options
    const commonOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          backgroundColor: isDarkMode ? "#374151" : "#ffffff",
          titleColor: isDarkMode ? "#ffffff" : "#333333",
          bodyColor: isDarkMode ? "#d1d1d6" : "#666666",
          borderColor: isDarkMode ? "#4b5563" : "#e5e7eb",
          borderWidth: 1,
          padding: 12,
          displayColors: false,
          callbacks: {
            label: function (context) {
              return formatCurrency(context.parsed.y);
            }
          }
        }
      },
      scales: {
        x: {
          grid: {
            display: false
          },
          ticks: {
            color: textColor
          }
        },
        y: {
          grid: {
            color: gridColor,
            drawBorder: false
          },
          ticks: {
            color: textColor,
            callback: function (value) {
              return activeTab === "revenue"
                ? "$" + value.toLocaleString()
                : value;
            }
          },
          beginAtZero: true
        }
      },
      animation: {
        duration: 1000,
        easing: "easeOutQuart"
      }
    };

    // Create chart based on platform's chart type
    switch (chartType) {
      case "bar":
        chartOptions = {
          type: "bar",
          data: {
            labels: data.map((item) => item.month),
            datasets: [
              {
                data: data.map((item) => item.value),
                backgroundColor: lightColor,
                borderColor: color,
                borderWidth: 1,
                borderRadius: 4,
                barThickness: 40
              }
            ]
          },
          options: {
            ...commonOptions,
            plugins: {
              ...commonOptions.plugins,
              tooltip: {
                ...commonOptions.plugins.tooltip,
                callbacks: {
                  ...commonOptions.plugins.tooltip.callbacks,
                  title: function (tooltipItems) {
                    return tooltipItems[0].label;
                  }
                }
              }
            }
          }
        };
        break;

      case "line":
        chartOptions = {
          type: "line",
          data: {
            labels: data.map((item) => item.month),
            datasets: [
              {
                data: data.map((item) => item.value),
                borderColor: color,
                backgroundColor: "transparent",
                pointBackgroundColor: color,
                pointBorderColor: isDarkMode ? "#2a2a2a" : "#ffffff",
                pointBorderWidth: 2,
                pointRadius: 6,
                pointHoverRadius: 8,
                tension: 0.4,
                borderWidth: 3
              }
            ]
          },
          options: commonOptions
        };
        break;

      case "area":
        chartOptions = {
          type: "line",
          data: {
            labels: data.map((item) => item.month),
            datasets: [
              {
                data: data.map((item) => item.value),
                borderColor: color,
                backgroundColor: function (context) {
                  const chart = context.chart;
                  const { ctx, chartArea } = chart;
                  if (!chartArea) {
                    return null;
                  }
                  const gradient = ctx.createLinearGradient(
                    0,
                    chartArea.bottom,
                    0,
                    chartArea.top
                  );
                  gradient.addColorStop(0, "rgba(0, 0, 0, 0)");
                  gradient.addColorStop(1, lightColor + "80");
                  return gradient;
                },
                pointBackgroundColor: color,
                pointBorderColor: isDarkMode ? "#2a2a2a" : "#ffffff",
                pointBorderWidth: 2,
                pointRadius: 6,
                pointHoverRadius: 8,
                tension: 0.4,
                borderWidth: 3,
                fill: true
              }
            ]
          },
          options: commonOptions
        };
        break;

      case "stacked":
        // For GitHub, we'll create a stacked bar chart showing different contribution types
        chartOptions = {
          type: "bar",
          data: {
            labels: data.map((item) => item.month),
            datasets: [
              {
                label: "Direct",
                data: data.map((item) => item.value * 0.6), // 60% of value
                backgroundColor: color,
                borderColor: "transparent",
                borderRadius: {
                  topLeft: 4,
                  topRight: 4,
                  bottomLeft: 0,
                  bottomRight: 0
                },
                barThickness: 40
              },
              {
                label: "Indirect",
                data: data.map((item) => item.value * 0.4), // 40% of value
                backgroundColor: lightColor,
                borderColor: "transparent",
                borderRadius: {
                  topLeft: 0,
                  topRight: 0,
                  bottomLeft: 0,
                  bottomRight: 0
                },
                barThickness: 40
              }
            ]
          },
          options: {
            ...commonOptions,
            scales: {
              ...commonOptions.scales,
              x: {
                ...commonOptions.scales.x,
                stacked: true
              },
              y: {
                ...commonOptions.scales.y,
                stacked: true
              }
            },
            plugins: {
              ...commonOptions.plugins,
              tooltip: {
                ...commonOptions.plugins.tooltip,
                callbacks: {
                  ...commonOptions.plugins.tooltip.callbacks,
                  title: function (tooltipItems) {
                    return tooltipItems[0].label;
                  },
                  label: function (context) {
                    const label = context.dataset.label || "";
                    const value = formatCurrency(context.parsed.y);
                    return `${label}: ${value}`;
                  },
                  footer: function (tooltipItems) {
                    let sum = 0;
                    tooltipItems.forEach(function (tooltipItem) {
                      sum += tooltipItem.parsed.y;
                    });
                    return "Total: " + formatCurrency(sum);
                  }
                }
              }
            }
          }
        };
        break;
    }

    // Create chart
    chart = new Chart(ctx, chartOptions);

    // Animate chart with GSAP
    animateChart();
  }

  // Function to update chart colors when theme changes
  function updateChartColors() {
    const isDarkMode = document.body.classList.contains("dark-theme");
    const gridColor = isDarkMode
      ? "rgba(255, 255, 255, 0.1)"
      : "rgba(0, 0, 0, 0.1)";
    const textColor = isDarkMode ? "#d1d1d6" : "#666666";

    chart.options.scales.y.grid.color = gridColor;
    chart.options.scales.x.ticks.color = textColor;
    chart.options.scales.y.ticks.color = textColor;

    // Update tooltip colors
    chart.options.plugins.tooltip.backgroundColor = isDarkMode
      ? "#374151"
      : "#ffffff";
    chart.options.plugins.tooltip.titleColor = isDarkMode
      ? "#ffffff"
      : "#333333";
    chart.options.plugins.tooltip.bodyColor = isDarkMode
      ? "#d1d1d6"
      : "#666666";
    chart.options.plugins.tooltip.borderColor = isDarkMode
      ? "#4b5563"
      : "#e5e7eb";

    // For line and area charts, update point border color
    if (chart.config.type === "line") {
      chart.data.datasets.forEach((dataset) => {
        dataset.pointBorderColor = isDarkMode ? "#2a2a2a" : "#ffffff";
      });
    }
  }

  // Animate dashboard card with GSAP
  function animateDashboard() {
    gsap.to(dashboardCard, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out"
    });
  }

  // Animate metrics with GSAP
  function animateMetrics() {
    const metrics = document.querySelectorAll(".metric");

    gsap.fromTo(
      metrics,
      { opacity: 0, x: -20 },
      {
        opacity: 1,
        x: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out"
      }
    );
  }

  // Animate chart with GSAP
  function animateChart() {
    gsap.fromTo(
      chartWrapper,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        onComplete: animateAvatars
      }
    );
  }

  // Animate avatars with GSAP
  function animateAvatars() {
    gsap.fromTo(
      chartLabels,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.5,
        ease: "power2.out"
      }
    );

    const avatars = document.querySelectorAll(".avatar");
    gsap.fromTo(
      avatars,
      { scale: 0, y: 10 },
      {
        scale: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.05,
        ease: "back.out(1.7)"
      }
    );
  }

  // Initialize dashboard
  function initDashboard() {
    // Set initial platform
    platformLogo.className = "platform-logo behance";
    sidebar.className = "sidebar behance";

    // Animate dashboard entry
    animateDashboard();

    // Animate metrics
    setTimeout(animateMetrics, 300);

    // Initialize chart
    setTimeout(updateChart, 500);
  }

  // Initialize dashboard
  initDashboard();

  // Handle window resize
  window.addEventListener("resize", function () {
    if (chart) {
      chart.resize();
    }
  });
});