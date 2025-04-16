package com.example.codeceptjsversion2;

import static androidx.test.espresso.Espresso.onView;
import static androidx.test.espresso.action.ViewActions.click;
import static androidx.test.espresso.assertion.ViewAssertions.matches;
import static androidx.test.espresso.matcher.ViewMatchers.withId;
import static androidx.test.espresso.matcher.ViewMatchers.withText;

import androidx.test.ext.junit.rules.ActivityScenarioRule;
import androidx.test.ext.junit.runners.AndroidJUnit4;

import org.junit.Rule;
import org.junit.Test;
import org.junit.runner.RunWith;

@RunWith(AndroidJUnit4.class)
public class MainActivityTest {

    @Rule
    public ActivityScenarioRule<MainActivity> activityRule =
            new ActivityScenarioRule<>(MainActivity.class);

    @Test
    public void testAddition() {
        onView(withId(R.id.button2)).perform(click());
        onView(withId(R.id.buttonAdd)).perform(click());
        onView(withId(R.id.button3)).perform(click());
        onView(withId(R.id.buttonEquals)).perform(click());
        onView(withId(R.id.resultTextView))
                .check(matches(withText("5.0")));
    }

    @Test
    public void testSubtraction() {
        onView(withId(R.id.button5)).perform(click());
        onView(withId(R.id.buttonSubtract)).perform(click());
        onView(withId(R.id.button2)).perform(click());
        onView(withId(R.id.buttonEquals)).perform(click());
        onView(withId(R.id.resultTextView))
                .check(matches(withText("3.0")));
    }

    @Test
    public void testMultiplication() {
        onView(withId(R.id.button4)).perform(click());
        onView(withId(R.id.buttonMultiply)).perform(click());
        onView(withId(R.id.button6)).perform(click());
        onView(withId(R.id.buttonEquals)).perform(click());
        onView(withId(R.id.resultTextView))
                .check(matches(withText("24.0")));
    }

    @Test
    public void testDivision() {
        onView(withId(R.id.button8)).perform(click());
        onView(withId(R.id.buttonDivide)).perform(click());
        onView(withId(R.id.button2)).perform(click());
        onView(withId(R.id.buttonEquals)).perform(click());
        onView(withId(R.id.resultTextView))
                .check(matches(withText("4.0")));
    }

    @Test
    public void testClearFunction() {
        onView(withId(R.id.button9)).perform(click());
        onView(withId(R.id.buttonClear)).perform(click());
        onView(withId(R.id.resultTextView))
                .check(matches(withText("0")));
    }
}