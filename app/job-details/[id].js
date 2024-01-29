import {useCallBack, useState } from 'react';
import { Company, JobAbout, JobFooter, JobTabs, ScreenHeaderBtn, Specifics } from '../../components';
import { COLORS, icons, SIZES } from '../../constants/theme';
import useFetch from '../../hook/useFetch';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

const JobDetails = () => {
    const params = useLocalSearchParams();
    const router = useRouter();

    const { data, isLoaded, error, refetch } = useFetch('job-details', {
        job_id: params.id
    })

    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = () => {

    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}
        >
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    headerBackVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn iconUrl={icons.left} dimension="60%" handlePress={handleBack} />
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn iconUrl={icons.share} dimension="60%" />
                    ),
                    headerTitle: "",
                }}
            />

            <>
                <ScrollView showsVerticalScrollIndicator={false} refreshControl={<RefreshControl refreshing={isLoading} onRefresh={refetch} />}>
                    {isLoading ? (
                        <ActivityIndicator style="large" colors={COLORS.primary} />
                    ) : error ? (
                        <Text>Something went wrong</Text>
                    ) : data.length === 0 ? (
                        <Text>No data</Text>
                    ) : (
                        <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
                            <Company
                                companyLogo={data[0].employer_logo}
                                jobTitle={data[0].job_title}
                                companyName={data[0].employer_name}
                                location={data[0].job_country}
                            />

                            <JobTabs
                                tabs={Tabs}
                                activeTab={activeTab}
                                setActiveTab={setActiveTab} 

                            />

                        </View>
                    )}

                </ScrollView>
            </>


        </SafeAreaView>
    )

    
}

export default JobDetails;