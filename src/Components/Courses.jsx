import { useState } from "react";
import axios from "axios";
import { GraduationCap, BookOpen, Brain } from "lucide-react";

const courses = [
  {
    title: "Algorithm for MNC",
    skills: "DSA, Problem Solving, Aptitude",
    duration: "80 hrs",
    mode: "Online",
    sfee: 2500,
    fee: 999,
    icon: <Brain className="h-8 w-8 text-indigo-600" />,
  },
  {
    title: "Web Development",
    skills: "MongoDB, React, Django",
    duration: "80 hrs",
    mode: "Online",
    sfee: 2500,
    fee: 999,
    icon: <BookOpen className="h-8 w-8 text-indigo-600" />,
  },
  {
    title: "Machine Learning",
    skills: "Supervised/Unsupervised Learning, Python",
    duration: "80 hrs",
    mode: "Online",
    sfee: 2500,
    fee: 999,
    icon: <Brain className="h-8 w-8 text-indigo-600" />,
  },
  {
    title: "Artificial Intelligence",
    skills: "AI Concepts, Neural Nets, Logic Programming",
    duration: "80 hrs",
    mode: "Online",
    sfee: 2500,
    fee: 999,
    icon: <Brain className="h-8 w-8 text-indigo-600" />,
  },
];

const Course = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    college: "",
    department: "",
  });
  const [popupMessage, setPopupMessage] = useState(null);

  const showPopup = (message, type = "info") => {
    setPopupMessage({ message, type });
    if (type === "info") {
      setTimeout(() => setPopupMessage(null), 1600);
    }
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  //   


  const paymentLinks = {
    "Algorithm for MNC": "https://rzp.io/rzp/rth7p3dP",
    "Web Development": "https://rzp.io/rzp/IeZU2Fu",
    "Machine Learning": "https://rzp.io/rzp/dpxjI9I",
    "Artificial Intelligence": "https://rzp.io/rzp/05LCU5zz",
    "Final Year Project Assistance": "https://rzp.io/rzp/QClEQeY0",
  };

  const handleSubmit = async () => {
    if (!selectedCourse) {
      showPopup("Please select a course or program first.", "error");
      return;
    }

    try {
      // Log the order
      await axios.post("https://arindam.tech/api/order/", {
        name: `${formData.name} (**Phone--> ${formData.phone})`,
        phone: formData.phone,
        email: formData.email,
        course_name: selectedCourse.title,
        fee: selectedCourse.fee,
      });

      // Get payment link from the map
      const paymentUrl = paymentLinks[selectedCourse.title];
      if (!paymentUrl) {
        showPopup("No payment link found for the selected course.", "error");
        return;
      }

      showPopup("Redirecting to payment...", "info");

      // Redirect after 1 second to show message
      setTimeout(() => {
        window.location.href = paymentUrl;
      }, 1000);
    } catch (error) {
      console.error("Payment initiation error:", error);
      showPopup("Something went wrong. Please try again later.", "error");
    }
  };

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
        Training & Internship Programs
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {courses.map((course, idx) => (
          <div
            key={idx}
            className="p-6 bg-white rounded-3xl shadow-lg border border-gray-200 hover:shadow-2xl transition duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              {course.icon}
              <h2 className="text-xl font-semibold text-gray-800">
                {course.title}
              </h2>
            </div>
            <p className="text-sm text-gray-500 mb-2">
              <strong>Skills:</strong> {course.skills}
            </p>
            <p className="text-sm text-gray-500 mb-2">
              <strong>Duration:</strong> {course.duration} | <strong>Mode:</strong>{" "}
              {course.mode}
            </p>
            <p className="text-sm text-gray-700 font-semibold mb-4 line-through ">
              Fee: ₹{course.sfee}
            </p>
            <p className="text-sm text-gray-700 font-semibold mb-4">
              Offer Fee: ₹{course.fee}/- Only (Including all taxes)
            </p>
            <button
              onClick={() => setSelectedCourse(course)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-medium transition"
            >
              Enroll Now
            </button>
          </div>
        ))}
      </div>

      {/* Final Year Project Assistance */}
      <h2 className="text-3xl font-bold mt-20 mb-6 text-center text-gray-800">
        Final Year Project Assistance
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 bg-white rounded-3xl shadow-lg border border-gray-200 hover:shadow-2xl transition">
          <div className="flex items-center gap-4 mb-4">
            <GraduationCap className="h-8 w-8 text-indigo-600" />
            <h3 className="text-xl font-semibold text-gray-800">
              Industry-standard Live Project
            </h3>
          </div>
          <p className="text-sm text-gray-600 mb-3">
            Get end-to-end support for your final year project — code, report,
            documentation, and viva preparation.
          </p>
          <p className="text-sm text-gray-600 mb-2">
            <strong>Delivery:</strong> Online/Remote
          </p>
          <p className="text-sm text-gray-700 font-semibold mb-4 line-through ">
            Fee: ₹4000
          </p>
          <p className="text-sm text-gray-800 font-semibold mb-4">
            Offer Fee: ₹1999/- Only (Including all taxes)
          </p>
          <button
            onClick={() =>
              setSelectedCourse({
                title: "Final Year Project Assistance",
                fee: 1999,
              })
            }
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-medium transition"
          >
            Enquire Now
          </button>
        </div>
      </div>

      {/* Modal Form */}
      {selectedCourse && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 backdrop-blur-sm">
          <div className="bg-white p-6 rounded-3xl w-full max-w-md shadow-xl relative">
            <h3 className="text-2xl font-semibold mb-4 text-center text-gray-800">
              Enroll in {selectedCourse.title}
            </h3>
            {popupMessage && (
              <div
                className={`text-sm text-center mb-4 px-4 py-2 rounded-lg ${popupMessage.type === "error"
                    ? "bg-red-100 text-red-700"
                    : "bg-green-100 text-green-700"
                  }`}
              >
                {popupMessage.message}
              </div>
            )}
            <div className="space-y-3">
              {["name", "phone", "email", "college", "department"].map((field) => (
                <input
                  key={field}
                  name={field}
                  placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                  value={formData[field]}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              ))}
            </div>
            <div className="flex justify-between items-center mt-5">
              <button
                onClick={() => setSelectedCourse(null)}
                className="text-red-600 font-medium hover:underline"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition"
              >
                {/* Pay ₹{selectedCourse.fee} */}
                Proceed to pay
              </button>
            </div>
          </div>
        </div>
      )}
      {popupMessage && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center">
          <div className="backdrop-blur-sm absolute inset-0 bg-black/10"></div>
          <div
            className={`relative z-10 max-w-md w-full mx-4 text-sm px-6 py-4 rounded-xl shadow-2xl border ${popupMessage.type === "error"
                ? "bg-red-100 text-red-800 border-red-300"
                : "bg-blue-100 text-blue-800 border-blue-300"
              }`}
          >
            <div className="flex items-center justify-between gap-4">
              <span className="font-medium">{popupMessage.message}</span>
              {popupMessage.type === "error" && (
                <button
                  className="text-lg font-bold focus:outline-none"
                  onClick={() => setPopupMessage(null)}
                >
                  ×
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>

  );

};

export default Course;
